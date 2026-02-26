---
title: "การจัดการสีและ Filters — สร้าง Instagram Filters ด้วย Python"
chapter: 2
description: "บทความโปรโมตบทที่ 2 — Color spaces, image filtering และ Instagram-style filters"
sourcePath: "chapter_02/ARTICLE_PROMOTION.md"
---

# บทเรียนที่ 2: การจัดการสีและ Filters — สร้าง Instagram Filters ด้วย Python

การจัดการสีและฟิลเตอร์เป็นพื้นฐานของ Computer Vision ที่เห็นได้ในแอปสมัยใหม่ ตั้งแต่ฟิลเตอร์บน Instagram ไปจนถึงการประมวลผลภาพทางการแพทย์

Color spaces คือระบบการแทนสีที่ต่างกัน RGB เป็นแบบที่จอคอมใช้ แต่ละพิกเซลมีค่าแดง เขียว น้ำเงิน HSV แยกชนิดสี ความอิ่มตัว และความสว่างออกจากกัน ทำให้ปรับโทนหรือสร้างฟิลเตอร์ได้ง่าย Grayscale ลดความซับซ้อนของภาพ มักใช้เป็นขั้นแรกในหลายอัลกอริทึม การเข้าใจ color spaces ช่วยให้ปรับสีได้แม่น สร้างฟิลเตอร์ที่ต้องการ และประมวลผลได้เร็วขึ้น Image filtering อย่าง blur, sharpen และ edge detection ใช้ทั้งในแอปถ่ายรูป แอปวิดีโอ และการประมวลผลภาพทางการแพทย์ Blur ลด noise และทำให้ภาพนุ่ม Sharpen เพิ่มความคม Edge detection หาขอบวัตถุ เป็นพื้นฐานของเทคนิคขั้นสูง

ในบทที่ 2 คุณจะได้เรียนเรื่อง Color spaces (RGB, HSV, Grayscale) ว่าต่างกันอย่างไรและเมื่อไหร่ใช้แบบไหน การกรองภาพแบบ Gaussian Blur, Median Blur, Sharpen และ Edge Detection (Canny, Sobel) รวมถึง Histogram กับการปรับ brightness และ contrast เพื่อให้ภาพชัดขึ้น โปรเจกต์ปฏิบัติคือสร้างฟิลเตอร์สไตล์ Instagram เช่น Vintage, Black & White, Sepia ปรับ Brightness/Contrast และ Blur พื้นหลัง คุณจะเห็นผลก่อน–หลังชัดเจน และนำไปใช้กับรูปในชีวิตประจำวันหรือต่อยอดเป็นแอปได้ บทนี้เป็นฐานของ Face Detection (บท 3) ที่ใช้ grayscale และ edge detection และของ Object Detection กับ AR ที่ใช้การกรองภาพและ color spaces

หลังจบบทคุณสามารถทำ Photo Editor ที่มีฟิลเตอร์หลายแบบ ทำ tools สำหรับ social media หรือ batch processing และถ้าอยากทำบน hardware จริง Raspberry Pi 5 ก็เหมาะกับโปรเจกต์ประมวลผลภาพแบบ real-time เพราะประมวลผลได้เร็ว RAM เพียงพอ และมี GPIO สำหรับกล้อง แนะนำใช้ Pi Camera Module V2/V3 สำหรับถ่ายภาพ Case ทางการสำหรับระบายความร้อน MicroSD 64GB ขึ้นไป Class 10 และ power supply 27W ทางการ โปรเจกต์ที่ทำได้ เช่น ระบบฟิลเตอร์ real-time กล้องรักษาความปลอดภัยที่ใส่ฟิลเตอร์ หรือ photo booth ที่มีฟิลเตอร์หลายแบบ

ดู Raspberry Pi 5 และอุปกรณ์เสริมได้ที่ [pwdvisionworks.com](https://pwdvisionworks.com) มีโปรโมชั่นชุด Image Processing Starter Kit และคู่มือภาษาไทย

บทเรียนที่ 2 ให้คุณเข้าใจ color spaces การกรองภาพ และการวิเคราะห์ histogram พร้อมสร้างฟิลเตอร์แบบที่เห็นในแอปถ่ายรูป ขั้นต่อไปคือเรียนจบบท ทำโปรเจกต์ แล้วไปต่อบท 3 (Face Detection)
