---
title: "Pose Estimation และ AR Filters — สร้าง Snapchat Filters ด้วย Python"
chapter: 6
description: "บทความโปรโมตบทที่ 6 — Pose estimation, MediaPipe และ AR filters"
sourcePath: "chapter_06/ARTICLE_PROMOTION.md"
---

# บทเรียนที่ 6: Pose Estimation และ AR Filters — สร้าง Snapchat Filters ด้วย Python

AR Filters เป็นเทคโนโลยีที่ทำให้ Instagram และ Snapchat ได้รับความนิยม เปลี่ยนวิธีถ่ายภาพและวิดีโอ และยังใช้ในแอปฟิตเนส เกม การวิเคราะห์การเคลื่อนไหว และการแปลภาษามือ

Pose Estimation คือการตรวจจับตำแหน่งส่วนต่างๆ ของร่างกาย เช่น มือ แขน ขา AR Filters คือการวางวัตถุเสมือนบนภาพจริง เช่น ใส่แว่น หนวด หมวก เทคโนโลยีนี้เป็นฐานของ VR และ Metaverse และเป็นทักษะที่ใช้ในงานสร้างสรรค์และงานเชิงผลิตภัณฑ์

ในบทที่ 6 คุณจะได้ใช้ MediaPipe จาก Google ที่มี Pose (จุดบนร่างกาย) Face Mesh (จุดบนใบหน้านับร้อย) และ Hands (จุดบนมือ) เรียนการหา landmarks บนใบหน้าแล้วใช้วางวัตถุเสมือน โปรเจกต์ปฏิบัติคือสร้าง AR filter แบบ Snapchat/Instagram ตรวจจับใบหน้าด้วย MediaPipe หา landmarks ติดแว่นหรือหนวด แล้วแสดงผลแบบ real-time คุณจะได้ filter ที่รันได้และเข้าใจว่าแอปใหญ่ใช้หลักการคล้ายกันอย่างไร บทนี้เชื่อมกับบท 7 (Segmentation) และบท 8 (โปรเจกต์จบ) ที่รวม AR เข้าไปในระบบ

หลังจบบทคุณสามารถทำแอปฟิลเตอร์ของตัวเอง แอปติดตามท่าออกกำลังกาย หรือเครื่องแปลภาษามือเบื้องต้น และใช้ในงาน marketing หรือ education ได้ ถ้าอยากทำบน hardware จริง Raspberry Pi 5 รองรับการรัน MediaPipe หรือโมเดลเบาได้ แนะนำใช้ Pi Camera Module V3 จอ touchscreen สำหรับแสดงผล AR Case ที่มี cooling MicroSD 128GB ขึ้นไป power supply 27W ทางการ โปรเจกต์ที่ทำได้ เช่น กระจก AR แสดงฟิลเตอร์ real-time ระบบติดตามท่าออกกำลังกาย เครื่องแปลภาษามือแสดงข้อความบนจอ หรือระบบลองแว่น/หมวกแบบ virtual

ดู Raspberry Pi 5 และอุปกรณ์ได้ที่ [pwdvisionworks.com](https://pwdvisionworks.com) มีชุด AR Kit และคู่มือสร้าง AR Filters ภาษาไทย

บทเรียนที่ 6 ให้คุณเข้าใจ Pose Estimation ใช้ MediaPipe ได้ และสร้าง AR filter แบบที่เห็นในแอปถ่ายรูป ขั้นต่อไปคือเรียนจบบท ทำโปรเจกต์ แล้วไปต่อบท 7 (Image Segmentation)
