---
title: "การตรวจจับวัตถุ"
order: 4
description: "Feature detection, edge, และการหา contour"
githubPath: "chapter_04"
colabUrl: "https://colab.research.google.com/github/pwd-vw/computer-vision/blob/main/chapter_04/colab_notebook.ipynb"
---

# บทที่ 4: Object Detection เบื้องต้น

จบบทนี้แล้ว คุณจะเข้าใจ Pre-trained models อย่าง YOLO และ MobileNet ใช้ TensorFlow Hub หรือ PyTorch Hub ตรวจจับวัตถุในภาพแล้วแสดง label ได้ และลองสร้างตัวตรวจจับสิ่งของในห้อง

## Object Detection คืออะไร?

Object Detection คือการตรวจจับและบอกตำแหน่งของวัตถุหลายชนิดในภาพพร้อมกัน ไม่เหมือน Image Classification ที่บอกแค่ว่าภาพนี้เป็นหมวดอะไร Detection จะบอกว่ามีอะไรบ้างและอยู่ตรงไหน มักแสดงเป็นกรอบ (bounding boxes) รอบวัตถุแต่ละอย่าง

## Pre-trained Models

YOLO (You Only Look Once) ตรวจจับได้เร็วมาก ใช้กับวิดีโอแบบ real-time ได้ และรองรับหลายสิบ class จากชุดข้อมูล COCO MobileNet ออกแบบมาให้เบาและเร็ว เหมาะกับมือถือหรืออุปกรณ์จำกัด ทั้งสองแบบมีให้ใช้ผ่าน Hub ไม่ต้อง train เองตั้งแต่ต้น

TensorFlow Hub และ PyTorch Hub เป็นที่รวมโมเดลที่ train ไว้แล้ว คุณโหลดมาใช้ ใส่ภาพเข้าไป แล้วได้ bounding boxes กับ label ออกมา

## โปรเจกต์ปฏิบัติ: ตัวตรวจจับสิ่งของในห้อง

ใน `colab_notebook.ipynb` มีตัวอย่างการโหลด pre-trained model ตรวจจับวัตถุในภาพ แสดงกรอบและ label นับจำนวนแต่ละประเภท และกรองเฉพาะวัตถุที่สนใจ เช่น โทรศัพท์ แก้ว คอมพิวเตอร์ ลองรันกับภาพห้องหรือโต๊ะทำงานของคุณ

## สรุป

เราได้รู้จัก Object Detection ว่าแตกต่างจาก Classification อย่างไร และได้ใช้ YOLO/MobileNet ผ่าน Hub เพื่อตรวจจับวัตถุในภาพ บทถัดไปจะไปต่อที่ Image Classification
