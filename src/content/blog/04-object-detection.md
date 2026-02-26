---
title: "Object Detection เบื้องต้น — เทคโนโลยีเบื้องหลัง Self-driving Cars"
chapter: 4
description: "บทความโปรโมตบทที่ 4 — Object detection, YOLO, MobileNet และตัวอย่างโปรเจกต์"
sourcePath: "chapter_04/ARTICLE_PROMOTION.md"
---

# บทเรียนที่ 4: Object Detection เบื้องต้น — เทคโนโลยีเบื้องหลัง Self-driving Cars

Object Detection คือเทคโนโลยีที่ทำให้รถไร้คนขับ "เห็น" และเข้าใจสิ่งรอบตัวได้ ไม่ใช่แค่บอกว่าภาพนี้เป็นหมวดอะไร แต่บอกว่ามีอะไรบ้างและอยู่ตรงไหน จึงใช้ได้ทั้งในรถอัตโนมัติ ระบบรักษาความปลอดภัย retail และ smart city

Object Detection ตรวจจับและระบุตำแหน่งของวัตถุหลายชนิดในภาพพร้อมกัน แสดงเป็นกรอบ (bounding boxes) รอบแต่ละอย่าง ต่างจาก Image Classification ที่บอกแค่ว่าภาพทั้งหมดเป็นหมวดใด เราเห็นการใช้งานในรถไร้คนขับที่ตรวจจับรถ คน และสัญญาณ ในกล้องรักษาความปลอดภัย การนับสินค้าและวิเคราะห์พฤติกรรมในร้าน และการตรวจภาพทางการแพทย์ เทคโนโลยีนี้เป็นฐานของหลายอุตสาหกรรมและตลาดงานต้องการคนที่ทำได้

ในบทที่ 4 คุณจะได้ใช้ pre-trained models อย่าง YOLO ที่เร็วมากและใช้ได้แบบ real-time กับ MobileNet ที่เบาเหมาะมือถือ ผ่าน TensorFlow Hub หรือ PyTorch Hub โดยไม่ต้อง train เอง โปรเจกต์ปฏิบัติคือสร้างตัวตรวจจับสิ่งของในห้อง ตรวจจับโทรศัพท์ แก้ว คอมพิวเตอร์ แสดงกรอบและ label นับจำนวนแต่ละประเภท บทนี้เชื่อมกับบท 5 (Classification) บท 6 (AR) บท 7 (Segmentation) และบท 8 (โปรเจกต์จบ) ที่รวม detection เข้าไปในระบบใหญ่

หลังจบบทคุณสามารถทำระบบตรวจจับวัตถุในบ้าน นับสต็อกอัตโนมัติ ติดตามสัตว์เลี้ยง หรืองานด้าน retail, security และ quality control ได้ ถ้าอยากทำบน hardware จริง Raspberry Pi 5 ใช้รัน Object Detection ได้ เพราะ CPU เร็วและ RAM รองรับโมเดลขนาดปานกลาง แนะนำใช้ Pi Camera Module V3 Case ที่มี active cooling เพราะการ inference ใช้ CPU มาก MicroSD 128GB ขึ้นไป power supply 27W ทางการ และอาจเพิ่ม USB hub, LED strip หรือ buzzer ตามประเภทโปรเจกต์ โปรเจกต์ที่ทำได้ เช่น ระบบนับสต็อกบน shelf กล้องตรวจจับวัตถุต้องสงสัย ระบบวิเคราะห์ในร้าน หรือระบบตรวจคุณภาพสินค้า

ดู Raspberry Pi 5 และอุปกรณ์ได้ที่ [pwdvisionworks.com](https://pwdvisionworks.com) มีชุด Object Detection Kit และคู่มือภาษาไทย

บทเรียนที่ 4 ให้คุณเข้าใจ Object Detection ใช้ YOLO/MobileNet ได้ และสร้างระบบตรวจจับวัตถุได้จริง ขั้นต่อไปคือเรียนจบบท ทำโปรเจกต์ แล้วไปต่อบท 5 (Image Classification)
