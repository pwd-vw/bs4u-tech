---
title: "Image Segmentation"
order: 7
description: "Semantic/Instance segmentation, DeepLab, U-Net และการตัดพื้นหลัง"
githubPath: "chapter_07"
colabUrl: "https://colab.research.google.com/github/pwd-vw/computer-vision/blob/main/chapter_07/colab_notebook.ipynb"
---

# บทที่ 7: Image Segmentation

เมื่อจบบทนี้ คุณจะแยกความต่างระหว่าง Semantic กับ Instance segmentation ได้ ใช้โมเดลอย่าง DeepLab หรือ U-Net ตัดพื้นหลังออกจากภาพ และลองเปลี่ยนพื้นหลัง

## Image Segmentation คืออะไร?

Image Segmentation คือการแบ่งภาพออกเป็นส่วนๆ ตามวัตถุหรือพื้นที่ Semantic segmentation แบ่งตามประเภท (คน รถ ถนน) โดยไม่แยกว่าเป็นกี่คนกี่คัน Instance segmentation แยกแต่ละวัตถุออกจากกัน เช่น คนที่หนึ่ง คนที่สอง ใช้ในงานนับจำนวนหรือติดตามวัตถุ

## โมเดลที่ใช้กัน

DeepLab จาก Google ใช้ Atrous Convolution ให้ผลลัพธ์คมชัด U-Net มีโครงแบบ U เหมาะกับภาพทางการแพทย์และงานที่ข้อมูลไม่มาก ทั้งสองแบบมี pre-trained model ให้ใช้ ตัดพื้นหลังได้โดยสร้าง mask ของวัตถุแล้วใช้ mask นั้นตัดหรือเปลี่ยนพื้นหลัง

## โปรเจกต์ปฏิบัติ: เครื่องมือเปลี่ยนพื้นหลัง

ใน `colab_notebook.ipynb` มีตัวอย่างการใช้ segmentation model สร้าง mask ตัดพื้นหลังออก แล้วใส่พื้นหลังใหม่ แล้วบันทึกผล ลองกับรูปคนหรือสินค้า

## สรุป

เราได้รู้จัก Semantic กับ Instance segmentation และใช้โมเดลอย่าง DeepLab/U-Net ตัดและเปลี่ยนพื้นหลัง บทถัดไปจะรวมทุกอย่างเป็นโปรเจกต์จบหลักสูตร
