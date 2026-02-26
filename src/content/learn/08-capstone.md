---
title: "โปรเจกต์จบหลักสูตร"
order: 8
description: "รวม techniques, Deploy ด้วย Gradio/Streamlit และ Hugging Face Spaces"
githubPath: "chapter_08"
colabUrl: "https://colab.research.google.com/github/pwd-vw/computer-vision/blob/main/chapter_08/colab_notebook.ipynb"
---

# บทที่ 8: โปรเจกต์จบหลักสูตร

จบบทนี้ คุณจะรวมเทคนิคจากบทที่ 1–7 ได้ deploy โมเดลด้วย Gradio หรือ Streamlit แชร์บน Hugging Face Spaces ได้ และสร้างโปรเจกต์ Computer Vision ที่สมบูรณ์หนึ่งชิ้น

## สรุปสิ่งที่เรียนมา

ในหลักสูตรนี้เราเริ่มจากพื้นฐาน Computer Vision และ Colab ไปการจัดการสีและ Filters Face Detection Object Detection Image Classification Pose และ AR Filters จนถึง Image Segmentation แต่ละบทสร้างบนบทก่อนหน้า

## Deploy โมเดล

Gradio สร้าง UI ให้ demos ได้เร็ว แค่กำหนด input/output กับฟังก์ชัน inference Streamlit ยืดหยุ่นกว่า ใช้เขียน web app หรือ dashboard ได้ ทั้งคู่รันบน Hugging Face Spaces ได้ฟรี แชร์ลิงก์ให้คนอื่นลองใช้ได้ทันที

## โปรเจกต์ปฏิบัติ: โปรเจกต์ Computer Vision แบบครบวงจร

ใน `colab_notebook.ipynb` มีแนวทางให้เลือกโปรเจกต์ที่สนใจ (เช่น Face Detection, Object Detection, Classification, ตัดพื้นหลัง หรือ AR) รวมเทคนิคที่เรียนมา สร้าง UI ด้วย Gradio หรือ Streamlit แล้ว deploy บน Hugging Face Spaces ตัวอย่างเช่น Smart Photo Editor ที่รวม filters การตรวจจับใบหน้าและการตัดพื้นหลัง Object Counter นับวัตถุในภาพ Food Classifier แยกประเภทอาหาร หรือแอป AR filter

## สรุป

เราได้รวมเทคนิคทั้งหมด deploy ด้วย Gradio/Streamlit และแชร์บน Hugging Face Spaces ได้

ยินดีด้วยที่เรียนจบหลักสูตร ต่อไปลองฝึกด้วยโปรเจกต์จริง แชร์ผลงาน และต่อยอดด้วยเทคนิคขั้นสูงที่สนใจ
