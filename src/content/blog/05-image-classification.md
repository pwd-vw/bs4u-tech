---
title: "Image Classification — สร้าง AI จำแนกรูปภาพด้วย Transfer Learning"
chapter: 5
description: "บทความโปรโมตบทที่ 5 — Image classification, Transfer learning และโปรเจกต์อาหารไทย"
sourcePath: "chapter_05/ARTICLE_PROMOTION.md"
---

# บทเรียนที่ 5: Image Classification — สร้าง AI จำแนกรูปภาพด้วย Transfer Learning

Image Classification เป็นพื้นฐานของ AI ที่เราเจอในชีวิตประจำวัน ตั้งแต่ Google Photos จัดรูปให้ ไปจนถึงการวิเคราะห์ภาพ X-ray ในโรงพยาบาล การแยกประเภทสินค้าในอีคอมเมิร์ซ และการตรวจคุณภาพพืชผล

Image Classification คือการจำแนกภาพเป็นหมวดหมู่ เช่น แมว สุนัข หรืออาหาร ด้วย Transfer Learning คุณไม่ต้อง train ตั้งแต่ต้น แค่ใช้โมเดลที่ train กับข้อมูลจำนวนมากมาแล้ว แล้วปรับ layer สุดท้ายหรือ fine-tune ด้วยข้อมูลของคุณ จึงใช้ข้อมูลน้อยกว่าและได้ผลดีเร็ว โมเดลอย่าง ResNet กับ EfficientNet มีให้ใช้กันอยู่แล้ว ResNet ให้ผลลัพธ์ดีและ train ได้ลึก EfficientNet ประหยัดทรัพยากรและเหมาะกับเครื่องไม่แรงหรือมือถือ

ในบทที่ 5 คุณจะได้เรียนหลักการ Transfer Learning ข้อดีข้อจำกัด และเมื่อไหร่ควรใช้ วิธีเลือกและใช้ pre-trained models การ fine-tune ทั้งแบบ freeze บาง layer และแบบปล่อยทั้งหมดด้วย learning rate ต่ำ โปรเจกต์ปฏิบัติคือสร้าง classifier แยกประเภทอาหารไทยหลายชนิด เตรียมข้อมูล โหลดโมเดล fine-tune ทดสอบและประเมิน แล้วบันทึกโมเดล คุณจะได้ classifier ที่รันได้จริงและเข้าใจว่าแอปจำแนกรูปทำงานอย่างไร บทนี้เป็นฐานของ AR (บท 6) Segmentation (บท 7) และโปรเจกต์จบ (บท 8) ที่รวม classification เข้าไปในระบบ

หลังจบบทคุณสามารถทำแอปจำแนกอาหาร แยกประเภทสัตว์เลี้ยง จำแนกพืช หรืองานด้าน e-commerce, medical imaging และ quality control ได้ ถ้าอยากทำบน hardware จริง Raspberry Pi 5 รองรับการรัน classifier ได้ เพราะ CPU เร็วและ RAM เพียงพอสำหรับโมเดลที่ optimize แล้ว แนะนำใช้ Pi Camera Module V3 สำหรับถ่ายภาพเพื่อ classify Case ที่มี cooling MicroSD 256GB ขึ้นไปสำหรับเก็บโมเดล power supply 27W ทางการ และอาจเพิ่มจอ touchscreen หรือ LED matrix สำหรับแสดงผล โปรเจกต์ที่ทำได้ เช่น ระบบจำแนกอาหารแสดงข้อมูลโภชนาการ ระบบจำแนกพืชแนะนำการดูแล ระบบตรวจคุณภาพสินค้า หรือเครื่องวิเคราะห์ภาพทางการแพทย์เบื้องต้น

ดู Raspberry Pi 5 และอุปกรณ์ได้ที่ [pwdvisionworks.com](https://pwdvisionworks.com) มีชุด Classification Kit และคู่มือสร้าง Image Classifier ภาษาไทย

บทเรียนที่ 5 ให้คุณเข้าใจ Transfer Learning ใช้ ResNet/EfficientNet ได้ และสร้าง classifier จำแนกรูปได้จริง ขั้นต่อไปคือเรียนจบบท ทำโปรเจกต์ แล้วไปต่อบท 6 (Pose และ AR Filters)
