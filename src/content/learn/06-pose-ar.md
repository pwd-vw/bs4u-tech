---
title: "Pose Estimation และ AR Filters"
order: 6
description: "MediaPipe Pose, Face Mesh และการสร้าง AR filters"
githubPath: "chapter_06"
colabUrl: "https://colab.research.google.com/github/pwd-vw/computer-vision/blob/main/chapter_06/colab_notebook.ipynb"
---

# บทที่ 6: Pose Estimation และ AR Filters

จบบทนี้ คุณจะเข้าใจ MediaPipe Pose และ Face Mesh ตรวจจับจุดสำคัญบนใบหน้า (landmarks) ได้ รู้วิธีติดวัตถุเสมือนบนใบหน้า และลองสร้าง AR filter แบบง่าย

## Pose Estimation คืออะไร?

Pose Estimation คือการตรวจจับตำแหน่งของส่วนต่างๆ ของร่างกาย เช่น มือ แขน ขา ใช้ในฟิลเตอร์ AR บน Instagram และ Snapchat การติดตามท่าออกกำลังกาย motion capture และการรู้จำภาษามือ

## MediaPipe

MediaPipe เป็น framework จาก Google สำหรับประมวลผลภาพและวิดีโอ มี Pose ที่ตรวจจับจุดบนร่างกายได้หลายสิบจุด Face Mesh ที่ให้จุดบนใบหน้านับร้อยจุด และ Hands สำหรับมือ ทำงานได้เร็วและแม่นยำพอสำหรับ real-time

Landmarks คือจุดสำคัญบนใบหน้า เช่น ตา จมูก ปาก คาง ใช้ landmarks เหล่านี้เพื่อวางวัตถุเสมือน (แว่น หนวด หมวก) วิเคราะห์อารมณ์ หรือทำ beauty filter

## AR Filters

AR (Augmented Reality) filters คือการวางวัตถุเสมือนบนภาพจริง เช่น ใส่แว่น หนวด หมวก หรือเปลี่ยนสีผม หลักการคือตรวจจับใบหน้าด้วย MediaPipe หา landmarks แล้ววาดหรือวางภาพ overlay ให้ตรงตำแหน่ง

## โปรเจกต์ปฏิบัติ: AR Filter แบบ Snapchat/Instagram

ใน `colab_notebook.ipynb` มีตัวอย่างการตรวจจับใบหน้าด้วย MediaPipe หา landmarks ติดวัตถุเสมือน เช่น แว่นหรือหนวด แล้วแสดงผล (รวมถึงแบบ real-time ถ้าใช้กับวิดีโอ) ลองปรับเป็นฟิลเตอร์ของตัวเอง

## สรุป

เราได้รู้จัก Pose Estimation และ MediaPipe ตรวจจับ landmarks บนใบหน้า และสร้าง AR filter แบบง่าย บทถัดไปจะไปต่อที่ Image Segmentation
