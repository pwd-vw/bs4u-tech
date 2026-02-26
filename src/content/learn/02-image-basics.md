---
title: "พื้นฐานภาพดิจิทัล"
order: 2
description: "พิกเซล แชนแนลสี และการอ่านภาพด้วยโค้ด"
githubPath: "chapter_02"
colabUrl: "https://colab.research.google.com/github/pwd-vw/computer-vision/blob/main/chapter_02/colab_notebook.ipynb"
---

# บทที่ 2: การจัดการสีและ Filters

จบบทนี้แล้ว คุณจะเข้าใจ Color spaces อย่าง RGB, HSV และ Grayscale ใช้การกรองภาพแบบ blur, sharpen และ edge detection วิเคราะห์ Histogram และปรับ contrast ได้ และลองสร้างฟิลเตอร์สไตล์ Instagram ด้วย OpenCV

## Color Spaces (พื้นที่สี)

ภาพดิจิทัลเก็บสีเป็นตัวเลข ใน RGB แต่ละพิกเซลมีค่า Red, Green, Blue ตั้งแต่ 0 ถึง 255 เป็นระบบที่ใช้กับหน้าจอทั่วไป ใน HSV จะแยก Hue (ชนิดของสี) Saturation (ความอิ่มตัว) และ Value (ความสว่าง) ออกจากกัน ทำให้ปรับโทนสีหรือสร้างฟิลเตอร์ได้สะดวก Grayscale คือภาพขาวดำที่ลดขนาดข้อมูลลง มักใช้เป็นขั้นแรกในงาน Computer Vision หลายอย่าง

## Image Filtering

การกรองภาพช่วยลด noise หรือเน้นรายละเอียด Blur (เช่น Gaussian Blur, Median Blur) ทำให้ภาพนุ่มและลดจุดรบกวน Sharpen ช่วยให้ขอบและรายละเอียดเด่นขึ้น Edge detection อย่าง Canny หรือ Sobel ใช้หาขอบของวัตถุในภาพ เป็นพื้นฐานของหลายเทคนิคขั้นสูง

## Histogram และ Contrast

Histogram เป็นกราฟแสดงการกระจายของค่าสีในภาพ ช่วยดูว่าแสงหรือสีไปอยู่ตรงไหน การปรับ contrast คือการยืดความต่างระหว่างสีอ่อนและเข้ม ทำให้ภาพดูชัดขึ้น

## โปรเจกต์ปฏิบัติ: สร้างฟิลเตอร์สไตล์ Instagram

ใน `colab_notebook.ipynb` มีตัวอย่างให้ลองทำฟิลเตอร์หลายแบบ เช่น Vintage (ซีเปีย), Black & White, ปรับ Brightness/Contrast และ Blur พื้นหลัง ลองทำตามแล้วปรับค่าหรือเพิ่มฟิลเตอร์ของตัวเอง

## สรุป

บทนี้เราคุยกันเรื่อง Color spaces การกรองภาพแบบ blur, sharpen และ edge detection รวมถึง Histogram กับ contrast และได้ลองสร้างฟิลเตอร์แบบที่เห็นในแอปถ่ายรูป บทถัดไปจะไปต่อที่ Face Detection
