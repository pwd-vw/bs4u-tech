# Pipeline เนื้อหาอัตโนมัติ → Blogger + www

เป้าหมาย: สร้างเนื้อหาด้วย Gemini ตามหัวข้อ/บทที่กำหนด แล้วเผยแพร่ไป **Blogger** (blog.bs4u-tech.com) และอัปเดต **www** ผ่าน Git push (หรือ Pages API)

## สถาปัตยกรรม

1. **Cloud Scheduler** เรียก **Google Cloud Workflows** (รายวันหรือตามกำหนด)
2. **Workflow** เรียก **Cloud Function** (หรือ Cloud Run) ส่งพารามิเตอร์ เช่น หัวข้อถัดไป หรือ lesson id
3. **Cloud Function**  
   - เรียก **Gemini API** สร้างข้อความ/HTML ตามหัวข้อ  
   - เรียก **Blogger API v3** สร้างโพสต์ (draft หรือ publish ทันที)  
   - (ถ้าใช้แบบ A) สร้าง/อัปเดตไฟล์ใน repo แล้ว **git push** → Cloudflare Pages build อัตโนมัติ

## ไฟล์ในโฟลเดอร์นี้

- `workflow.yaml` — ตัวอย่าง Cloud Workflow เรียก HTTP (Cloud Function)
- `cloud-function/` — ตัวอย่าง Cloud Function (Node.js) ใช้ Gemini + Blogger API

## การตั้งค่า

### 1. Blogger API

- เปิด [Google Cloud Console](https://console.cloud.google.com/) สร้างโปรเจกต์ (หรือใช้เดิม)
- เปิดใช้ **Blogger API**
- สร้าง OAuth 2.0 credentials (Desktop app หรือ Service account ตามที่ใช้)
- Scope: `https://www.googleapis.com/auth/blogger`
- หา **blogId**: เปิด Blogger → Settings → ดู URL หรือใช้ [Blogger API blogs.list](https://developers.google.com/blogger/docs/3.0/reference/blogs/list) ด้วย OAuth

### 2. Gemini API

- เปิดใช้ **Generative Language API** (Gemini) ในโปรเจกต์เดียวกัน
- ใช้ API key หรือ service account ตามที่ Function ใช้

### 3. Cloud Function

- ใน `cloud-function/` ตั้งค่า env หรือ Secret Manager:
  - `BLOG_ID` — Blogger blog ID
  - `GEMINI_API_KEY` หรือใช้ Application Default Credentials
  - OAuth tokens สำหรับ Blogger (ถ้าใช้ OAuth เก็บใน Secret Manager)
- Deploy: `gcloud functions deploy publishContent --runtime nodejs20 --trigger-http --allow-unauthenticated` (หรือใช้ Cloud Run)

### 4. Cloud Workflows

- Deploy workflow ที่เรียก URL ของ Cloud Function (พร้อม auth ถ้าไม่ allow unauthenticated)
- ตั้ง **Cloud Scheduler** job เรียก workflow ตาม cron (เช่น ทุกวัน 08:00)

### 5. อัปเดต www (แบบ Git push)

- เก็บ credentials สำหรับ push ไป GitHub (เช่น deploy key หรือ token) ใน Secret Manager
- ใน Cloud Function หลัง generate content: clone/pull repo, เขียนไฟล์ใน `src/content/learn/` หรือ content ที่ใช้, commit + push
- Cloudflare Pages ที่เชื่อม repo นี้จะ build อัตโนมัติ

## หมายเหตุ

- Google Workspace Studio ไม่มี connector Blogger โดยตรง; ใช้ Cloud Workflows + HTTP ไปที่ Function นี้จะควบคุมได้ครบ
- สำหรับ **แบบ B (Pages API)** ให้ Function หรือ step แยก build static site แล้วเรียก Cloudflare Pages Deployments API แทน git push
