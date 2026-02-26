---
title: "Image Segmentation — ตัดพื้นหลังและเปลี่ยนพื้นหลังด้วย AI"
chapter: 7
description: "บทความโปรโมตบทที่ 7 — Image segmentation, DeepLab/U-Net และ background removal"
sourcePath: "chapter_07/ARTICLE_PROMOTION.md"
---

# บทเรียนที่ 7: Image Segmentation — ตัดพื้นหลังและเปลี่ยนพื้นหลังด้วย AI

Image Segmentation เป็นเทคโนโลยีที่ใช้ในแอปประชุมอย่าง Zoom ตอนเปลี่ยนพื้นหลัง ในการวิเคราะห์ภาพทางการแพทย์ ในรถไร้คนขับที่ต้องแยกถนน ทางเท้า และวัตถุ และในการตัดพื้นหลังรูปสินค้าหรือรูปคน

Image Segmentation คือการแบ่งภาพออกเป็นส่วนๆ ตามวัตถุหรือพื้นที่ Semantic segmentation แบ่งตามประเภท (คน รถ ถนน) โดยไม่แยกว่าเป็นกี่คนกี่คัน Instance segmentation แยกแต่ละวัตถุออกจากกัน ใช้ในงานนับหรือติดตาม โมเดลอย่าง DeepLab จาก Google และ U-Net ที่เหมาะกับภาพทางการแพทย์มีให้ใช้แล้ว การตัดพื้นหลังทำได้โดยสร้าง mask ของวัตถุแล้วใช้ mask นั้นตัดหรือเปลี่ยนพื้นหลัง

ในบทที่ 7 คุณจะได้เรียนความต่างระหว่าง Semantic กับ Instance segmentation ว่าเมื่อไหร่ใช้แบบไหน วิธีใช้ pre-trained models อย่าง DeepLab และ U-Net และการทำ background removal โปรเจกต์ปฏิบัติคือสร้างเครื่องมือเปลี่ยนพื้นหลัง ใช้ segmentation model สร้าง mask ตัดพื้นหลังออก ใส่พื้นหลังใหม่ แล้วบันทึกผล คุณจะได้เครื่องมือที่ใช้กับรูปคนหรือสินค้าได้จริง และเข้าใจว่า virtual background ใน Zoom ทำงานอย่างไร บทนี้เป็นบทก่อนโปรเจกต์จบ (บท 8) ที่จะรวม segmentation เข้าไปในโปรเจกต์ใหญ่

หลังจบบทคุณสามารถทำเครื่องมือตัด/เปลี่ยนพื้นหลังรูป batch เปลี่ยนพื้นหลังวิดีโอ หรือเครื่องมือตัดพื้นหลังรูปสินค้า และใช้ในงาน e-commerce, video production หรือ medical imaging ได้ ถ้าอยากทำบน hardware จริง Raspberry Pi 5 รองรับการรัน segmentation โมเดลที่เบาได้ แนะนำใช้ Pi Camera Module V3 จอ HDMI สำหรับแสดงผล Case ที่มี cooling MicroSD 256GB ขึ้นไป power supply 27W ทางการ และถ้าทำวิดีโออาจใช้ green screen ช่วยให้ segmentation ดีขึ้น โปรเจกต์ที่ทำได้ เช่น ระบบตัดพื้นหลัง real-time ระบบเปลี่ยนพื้นหลังแบบ Zoom เครื่องมือตัดพื้นหลังรูปสินค้า หรือสถานีวิเคราะห์ภาพทางการแพทย์ที่ segment อวัยวะ

ดู Raspberry Pi 5 และอุปกรณ์ได้ที่ [pwdvisionworks.com](https://pwdvisionworks.com) มีชุด Segmentation Kit และคู่มือสร้างระบบตัดพื้นหลังภาษาไทย

บทเรียนที่ 7 ให้คุณเข้าใจ Segmentation ใช้ DeepLab/U-Net ได้ และตัด/เปลี่ยนพื้นหลังได้จริง ขั้นต่อไปคือเรียนจบบท ทำโปรเจกต์ แล้วไปต่อบท 8 (โปรเจกต์จบหลักสูตร)
