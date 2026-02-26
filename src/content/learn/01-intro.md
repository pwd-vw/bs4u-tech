---
title: "รู้จัก Computer Vision"
order: 1
description: "บทนำและภาพรวมของ Computer Vision"
githubPath: "chapter_01"
colabUrl: "https://colab.research.google.com/github/pwd-vw/computer-vision/blob/main/chapter_01/colab_notebook.ipynb"
---

# บทที่ 1: รู้จัก Computer Vision และ Colab

เมื่อจบบทนี้ คุณจะเข้าใจว่า Computer Vision คืออะไรและทำอะไรได้บ้าง ตั้งค่า Google Colab ได้ ติดตั้ง libraries ที่จำเป็น และโหลดภาพจาก URL หรือ Google Drive แล้ว resize, crop, หมุนภาพได้ด้วยโค้ด

## Computer Vision คืออะไร?

Computer Vision เป็นสาขาหนึ่งของ AI ที่ทำให้คอมพิวเตอร์ "เห็น" และเข้าใจภาพหรือวิดีโอได้คล้ายมนุษย์ คุณเห็นมันในชีวิตประจำวันอยู่แล้ว เช่น ระบบปลดล็อกด้วยใบหน้าในสมาร์ทโฟน รถไร้คนขับที่ตรวจจับถนนและคนเดินถนน การวิเคราะห์ภาพ X-ray ในโรงพยาบาล ฟิลเตอร์บน Instagram และการตรวจสอบสินค้าในโรงงาน ล้วนใช้เทคโนโลยีนี้

## ตั้งค่า Google Colab

Google Colab (Colaboratory) ให้คุณรันโค้ด Python บน Cloud ได้ฟรี โดยไม่ต้องติดตั้งอะไรบนเครื่อง ไปที่ colab.research.google.com สร้าง Notebook ใหม่จาก File → New Notebook แล้วตั้งชื่อที่ด้านบนได้ตามต้องการ

## ติดตั้งและ Import Libraries

ใน Cell แรกของ Colab ให้รันเพื่อติดตั้ง OpenCV และ libraries อื่นๆ ที่ใช้ในหลักสูตร:

```python
# ติดตั้ง OpenCV และ libraries อื่นๆ
!pip install opencv-python pillow matplotlib numpy
```

จากนั้น import เพื่อใช้ในโค้ด:

```python
import cv2
import numpy as np
from PIL import Image
import matplotlib.pyplot as plt
from urllib.request import urlopen
```

## โปรเจกต์ปฏิบัติ: สร้างโปรแกรมแก้ไขรูปภาพ

ในไฟล์ `colab_notebook.ipynb` มีตัวอย่างให้คุณลองทำโปรแกรมที่โหลดภาพจาก URL ปรับขนาด (resize) ตัด (crop) หมุน (rotate) แล้วบันทึกภาพที่แก้ไขแล้ว ทำทีละขั้นตามโน๊ตบุ๊ก จะได้คุ้นกับการโหลดและแสดงภาพ รวมถึงการประมวลผลพื้นฐาน

## สรุป

ในบทนี้เราได้รู้จัก Computer Vision ว่าคืออะไรและใช้ที่ไหน ตั้งค่า Colab ติดตั้งและใช้งาน libraries พื้นฐาน แล้วเริ่มประมวลผลภาพอย่างง่าย ในบทถัดไปจะไปต่อที่การจัดการสีและ Filters
