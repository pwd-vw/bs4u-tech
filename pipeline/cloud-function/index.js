/**
 * Cloud Function ตัวอย่าง: รับ topic → สร้างเนื้อหาด้วย Gemini → เผยแพร่ไป Blogger API
 *
 * ตั้งค่า env:
 *   BLOG_ID — Blogger blog ID (ดูจาก Blogger Settings หรือ blogs.list)
 *   GEMINI_API_KEY — API key สำหรับ Gemini (หรือใช้ ADC)
 *
 * Blogger OAuth: ใช้ service account หรือ OAuth 2.0 กับ googleapis
 * เก็บ refresh_token / credentials ใน Secret Manager แล้วโหลดในโค้ด
 *
 * POST body: { "topic": "หัวข้อบทความ", "target": "blogger" }
 */

import { GoogleGenerativeAI } from "@google/generative-ai";
import { google } from "googleapis";

const BLOG_ID = process.env.BLOG_ID || "";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";

export async function publishContent(req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Methods", "POST");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { topic, target = "blogger" } = req.body || {};
  if (!topic) {
    res.status(400).json({ error: "Missing topic" });
    return;
  }

  try {
    // 1) Generate content with Gemini
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `เขียนบทความสั้นเกี่ยวกับหัวข้อต่อไปนี้ (ภาษาไทย) ในรูปแบบ HTML ที่เหมาะกับบล็อก ไม่ต้องใส่ <html> หรือ <body> แค่เนื้อหาใน <div> หรือ <p>: ${topic}`;
    const result = await model.generateContent(prompt);
    const text = result.response?.text?.() || "";
    const content = `<div>${text.replace(/\n/g, "</p><p>")}</div>`;

    if (target === "blogger" && BLOG_ID) {
      // 2) Publish to Blogger (ต้องตั้งค่า OAuth กับ googleapis — ตัวอย่างใช้ API key ไม่ได้ ต้องใช้ OAuth)
      // ใช้ googleapis ด้วย credentials จาก env หรือ Secret Manager
      // ใช้ Service Account key file หรือเก็บ credentials ใน Secret Manager แล้วโหลดเป็น GOOGLE_APPLICATION_CREDENTIALS
      const auth = new google.auth.GoogleAuth({
        scopes: ["https://www.googleapis.com/auth/blogger"],
      });
      const authClient = await auth.getClient(); // ต้องตั้งค่า ADC หรือ env
      const blogger = google.blogger({ version: "v3", auth: authClient });

      const insert = await blogger.posts.insert({
        blogId: BLOG_ID,
        requestBody: {
          title: topic.slice(0, 200),
          content,
        },
        isDraft: false,
      });

      const postId = insert.data.id;
      res.status(200).json({
        ok: true,
        blogger: { postId, url: insert.data.url },
        topic,
      });
    } else {
      res.status(200).json({
        ok: true,
        topic,
        contentPreview: content.slice(0, 300),
        message: "Set BLOG_ID and target=blogger to publish to Blogger",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message || "Internal error",
    });
  }
}

// สำหรับรัน local: npx functions-framework --target=publishContent
