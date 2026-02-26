---
title: "โปรเจกต์จบหลักสูตร — Deploy โมเดล AI เป็น Web App"
chapter: 8
description: "บทความโปรโมตบทที่ 8 — สรุปหลักสูตรและการ deploy โมเดลผ่าน Gradio/Streamlit และ Hugging Face Spaces"
sourcePath: "chapter_08/ARTICLE_PROMOTION.md"
---

# บทเรียนที่ 8: โปรเจกต์จบหลักสูตร — Deploy โมเดล AI เป็น Web App

การ deploy โมเดลเป็นขั้นตอนที่ทำให้โมเดลใช้งานได้จริง ถ้า train แล้วแต่ไม่มีใครเข้าใช้ได้ โมเดลก็ไม่สร้างคุณค่า Deploy คือการทำให้โมเดลทำงานผ่าน web interface หรือ API เพื่อให้คนอื่นใช้ ทดสอบกับผู้ใช้จริง แสดงผลงาน หรือสร้างรายได้

เครื่องมือที่ใช้กันบ่อยคือ Gradio ที่สร้าง UI สำหรับ demo ได้เร็ว และ Streamlit ที่ยืดหยุ่นกว่า เหมาะกับ web app หรือ dashboard ทั้งคู่ deploy บน Hugging Face Spaces ได้ฟรี แชร์ลิงก์ให้คนอื่นลองใช้ได้ทันที

ในบทที่ 8 คุณจะรวมเทคนิคจากบทที่ 1–7 เลือกโปรเจกต์ที่สนใจ (เช่น Face Detection, Object Detection, Classification, AR หรือตัดพื้นหลัง) สร้าง UI ด้วย Gradio หรือ Streamlit แล้ว deploy บน Hugging Face Spaces โปรเจกต์อาจเป็น Smart Photo Editor ที่รวม filters การตรวจจับใบหน้าและการตัดพื้นหลัง ตัวนับวัตถุ classifier แยกประเภทอาหาร หรือแอป AR filter คุณจะได้โปรเจกต์ที่สมบูรณ์หนึ่งชิ้นและรู้วิธีเอาโมเดลออกไปให้คนใช้จริง หลังจบคุณสามารถต่อยอดไปเรื่อง Model Optimization, Production Deployment, MLOps หรือ Cloud Deployment และนำทักษะไปใช้ในงาน ML Engineer, AI Product หรือการสร้าง SaaS

ถ้าอยากรันระบบบน hardware จริง Raspberry Pi 5 ใช้เป็น edge server รันโมเดลและ serve API ได้ แนะนำใช้ Pi 5 รุ่น 8GB สำหรับ workload หนัก Case ที่มี cooling MicroSD 512GB ขึ้นไปหรือ SSD ภายนอก power supply 27W ทางการ และอาจใช้ Ethernet และ UPS ถ้าต้องการความเสถียร โปรเจกต์ที่ทำได้ เช่น Edge AI server ที่ deploy โมเดลบน Pi และรับ request ผ่าน API hub สำหรับ smart home ที่รวมอุปกรณ์กับ AI ระบบ IoT ในโรงงาน หรือระบบ retail analytics ที่มี dashboard

ดู Raspberry Pi 5 และอุปกรณ์ได้ที่ [pwdvisionworks.com](https://pwdvisionworks.com) มีชุด Production Kit และคู่มือการ Deploy AI Models ภาษาไทย

บทเรียนที่ 8 เป็นทั้งจุดจบของหลักสูตรและจุดเริ่มต้นของการนำโมเดลไปใช้จริง คุณจะรวมทุกอย่างที่เรียนมา deploy ได้ และแชร์ผลงานได้ ขั้นต่อไปคือทำโปรเจกต์จบ deploy บน Hugging Face Spaces แชร์ผลงาน และถ้าพร้อมก็ลองเอา Raspberry Pi 5 มาสร้างระบบที่รันได้จริงหรือพัฒนาเป็นธุรกิจต่อ

ยินดีด้วยที่เรียนจบหลักสูตร Computer Vision ต่อไปลองฝึกด้วยโปรเจกต์จริง แชร์ผลงาน และต่อยอดด้วยเทคนิคขั้นสูงหรือการ deploy แบบ production
