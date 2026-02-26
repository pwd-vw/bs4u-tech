---
title: "Deep Learning สำหรับภาพ"
order: 5
description: "CNN และโมเดลสมัยใหม่สำหรับภาพ"
githubPath: "chapter_05"
colabUrl: "https://colab.research.google.com/github/pwd-vw/computer-vision/blob/main/chapter_05/colab_notebook.ipynb"
---

# บทที่ 5: Image Classification

เมื่อจบบทนี้ คุณจะเข้าใจ Transfer Learning ว่าคืออะไร ใช้โมเดล pre-trained อย่าง ResNet หรือ EfficientNet ได้ และลอง fine-tuning กับชุดข้อมูลของคุณ เพื่อสร้าง classifier แยกประเภทอาหารไทยหลายชนิด

## Image Classification คืออะไร?

Image Classification คือการจำแนกภาพเป็นหมวดหมู่ เช่น แมว สุนัข หรืออาหาร ใช้ในแอปจัดรูปภาพ การตรวจสอบคุณภาพสินค้า และการวินิจฉัยจากภาพทางการแพทย์

## Transfer Learning

Transfer Learning คือการนำความรู้จากโมเดลที่ train กับข้อมูลจำนวนมากมาใช้กับงานใหม่ โดยไม่ต้อง train ตั้งแต่ต้น วิธีทำคือใช้ backbone ของโมเดลอย่าง ResNet หรือ EfficientNet แล้วเปลี่ยน layer สุดท้ายให้ตรงกับจำนวน class ของคุณ จากนั้น train เฉพาะส่วนใหม่หรือ fine-tune ทั้งหมดด้วย learning rate ต่ำ ResNet ใช้ skip connections จึง train ได้ลึกมาก ส่วน EfficientNet ให้ความแม่นยำดีโดยใช้ทรัพยากรน้อย เหมาะกับเครื่องไม่แรงหรือมือถือ

## โปรเจกต์ปฏิบัติ: Classifier แยกประเภทอาหารไทย

ใน `colab_notebook.ipynb` มีตัวอย่างการโหลดและเตรียมข้อมูลอาหารไทยหลายชนิด ใช้ Transfer Learning ด้วย ResNet หรือ EfficientNet ทำ fine-tuning ทดสอบและประเมินผล แล้วบันทึกโมเดล ลองใช้กับชุดภาพอาหารของคุณเอง

## สรุป

เราได้รู้จัก Image Classification และ Transfer Learning ใช้โมเดล pre-trained แล้ว fine-tune กับงานของเรา บทถัดไปจะไปต่อที่ Pose Estimation และ AR Filters
