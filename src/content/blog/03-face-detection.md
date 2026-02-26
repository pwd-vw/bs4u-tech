---
title: "Face Detection พื้นฐาน — เทคโนโลยีเบื้องหลัง Face ID และ AR Filters"
chapter: 3
description: "บทความโปรโมตบทที่ 3 — Face detection, Haar Cascade และตัวอย่างโปรเจกต์"
sourcePath: "chapter_03/ARTICLE_PROMOTION.md"
---

# บทเรียนที่ 3: Face Detection พื้นฐาน — เทคโนโลยีเบื้องหลัง Face ID และ AR Filters

Face Detection เป็นหนึ่งในเทคโนโลยี Computer Vision ที่เจอในชีวิตประจำวันบ่อยที่สุด ตั้งแต่ Face ID บน iPhone การ tag ใบหน้าใน Facebook ฟิลเตอร์ AR บน Instagram และ Snapchat ไปจนถึงกล้องวงจรปิดและแอปจัดรูป

Face Detection คือการตรวจจับและบอกตำแหน่งของใบหน้าในภาพหรือวิดีโอ ใช้ทั้งในระบบรักษาความปลอดภัย เป็นฐานของ Face Recognition และเป็นหัวใจของ AR กับ Human–Computer Interaction ดังนั้นการเรียนบทนี้จึงได้ทั้งทักษะที่ใช้จริงและโอกาสต่อยอดในงาน

ในบทที่ 3 คุณจะได้เรียน Haar Cascade Classifiers ว่าทำงานอย่างไร ข้อดีข้อจำกัด และวิธีใช้กับ OpenCV จากนั้นจะลองตรวจจับใบหน้า ดวงตา รอยยิ้ม และโปรไฟล์ใบหน้า วาดกรอบรอบใบหน้าที่เจอ และนับจำนวนคน โปรเจกต์ปฏิบัติคือสร้างแอปนับจำนวนคนในรูปกลุ่ม คุณจะเห็นผลทันทีและเข้าใจว่าแอปอย่าง Facebook หรือ Instagram ใช้หลักการคล้ายกันอย่างไร บทนี้เป็นฐานของ Object Detection (บท 4) Image Classification (บท 5) และ AR Filters (บท 6) รวมถึงโปรเจกต์จบที่รวมหลายเทคนิค

หลังจบบทคุณสามารถทำโปรเจกต์อย่างจัดรูปตามใบหน้า กล้องแจ้งเตือนเมื่อมีคน ระบบนับการเข้าเรียน หรืองานด้าน retail และ security ได้ ถ้าอยากลงมือกับ hardware จริง Raspberry Pi 5 เหมาะกับโปรเจกต์ Face Detection เพราะประมวลผลได้เร็ว RAM เพียงพอ และมี GPIO สำหรับ sensor กับ alarm แนะนำใช้ Pi Camera Module V3 สำหรับ real-time Case ที่มีพัดลมเพื่อรันต่อเนื่อง MicroSD 128GB ขึ้นไป power supply 27W ทางการ และถ้าทำระบบแจ้งเตือนอาจเพิ่ม PIR motion sensor หรือ buzzer โปรเจกต์ที่ทำได้ เช่น doorbell ตรวจจับใบหน้า กล้องรักษาความปลอดภัย ระบบบันทึกเวลาเข้า–ออก หรือระบบควบคุมการเข้า–ออกด้วยใบหน้า

ดู Raspberry Pi 5 และอุปกรณ์ได้ที่ [pwdvisionworks.com](https://pwdvisionworks.com) มีชุด Security Kit และคู่มือสร้างระบบรักษาความปลอดภัยภาษาไทย

บทเรียนที่ 3 ให้คุณเข้าใจ Haar Cascade ตรวจจับใบหน้าได้ และสร้างแอปนับคนหรือระบบแจ้งเตือนได้ ขั้นต่อไปคือเรียนจบบท ทำโปรเจกต์ แล้วไปต่อบท 4 (Object Detection)
