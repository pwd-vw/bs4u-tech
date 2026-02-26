---
title: "Image Filters"
order: 3
description: "Blur, edge detection, grayscale, sepia และการปรับสี"
githubPath: "chapter_03"
colabUrl: "https://colab.research.google.com/github/pwd-vw/computer-vision/blob/main/chapter_03/colab_notebook.ipynb"
---

# บทที่ 3: Face Detection พื้นฐาน

เมื่อจบบทนี้ คุณจะเข้าใจ Haar Cascade Classifiers ตรวจจับใบหน้าและดวงตาในภาพ วาดกรอบรอบใบหน้าที่ตรวจจับได้ และลองสร้างแอปนับจำนวนคนในรูปกลุ่ม

## Haar Cascade Classifiers

Haar Cascade เป็นเทคนิค Machine Learning สำหรับตรวจจับวัตถุ โดยเฉพาะใบหน้า ใช้ features แบบ Haar-like ฝึกจาก positive และ negative samples และใช้โครงสร้างแบบ Cascade เพื่อให้รันได้เร็ว ข้อดีคือเบาและไม่ต้องใช้ GPU ทำงานได้ดีในสภาพแสงปกติ ข้อจำกัดคืออาจพลาดใบหน้าที่หันด้านข้างและค่อนข้างไวต่อแสงกับมุมกล้อง

## การตรวจจับใบหน้า

OpenCV มีโมเดล Haar Cascade ที่ train ไว้แล้วสำหรับใบหน้าหน้าตรง ดวงตา รอยยิ้ม และโปรไฟล์ใบหน้า หลังตรวจจับได้ เราสามารถวาดกรอบรอบใบหน้า แสดงจำนวนที่พบ และบันทึกภาพได้

## โปรเจกต์ปฏิบัติ: แอปนับจำนวนคนในรูปกลุ่ม

ใน `colab_notebook.ipynb` มีตัวอย่างให้โหลดภาพกลุ่ม ตรวจจับใบหน้าทั้งหมด นับจำนวนคน วาดกรอบ แล้วแสดงผล ลองทำตามแล้วปรับใช้กับรูปของคุณ

## สรุป

ในบทนี้เราได้รู้จัก Haar Cascade วิธีตรวจจับใบหน้าและดวงตา การวาดกรอบ และการนับคนในภาพ บทถัดไปจะไปต่อที่ Object Detection
