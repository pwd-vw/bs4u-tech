---
title: "ตั้งค่า Radxa DRAGON Q6A สำหรับ Edge Computing และ Computer Vision"
device: "radxa-dragon-q6a"
order: 3
level: "beginner"
description: "เตรียม OS, ติดตั้ง Python + OpenCV และเชื่อมต่อกล้องบนบอร์ด Radxa DRAGON Q6A สำหรับงาน Edge AI"
githubPath: ""
---

# ตั้งค่า Radxa DRAGON Q6A สำหรับ Edge Computing และ Computer Vision

บทนี้สมมติว่าคุณใช้บอร์ดตระกูล **Radxa DRAGON Q6A** (หรือรุ่นใกล้เคียง) เพื่อทำ Edge Computing / Computer Vision ร่วมกับระบบหลักของ `bs4u-tech.com`

เนื้อหาจะคล้ายกับการตั้งค่า Raspberry Pi 5 แต่ปรับตาม OS/แพ็กเกจของ Radxa

> หมายเหตุ: ชื่อ OS/คำสั่งอาจต่างกันเล็กน้อยตามดิสโทรที่คุณเลือกใช้ (เช่น Ubuntu / Debian ที่ปรับแต่งโดย Radxa)

## 1. เตรียม Image และ Flash ลงสตอเรจ

1. ดาวน์โหลด image สำหรับ Radxa DRAGON Q6A จากเว็บไซต์ Radxa หรือผู้จัดจำหน่าย
2. ใช้ `balenaEtcher` หรือ `Raspberry Pi Imager` (ถ้ารองรับ) ในการเขียน image ลง microSD / eMMC ตามที่บอร์ดรองรับ
3. ใส่สตอเรจเข้าไปในบอร์ด ต่อจอ + คีย์บอร์ด/เมาส์ หรือเตรียม SSH

## 2. อัปเดตระบบและติดตั้งแพ็กเกจพื้นฐาน

หลังจากบูตเข้าระบบได้แล้ว เปิด Terminal หรือ SSH เข้าไป:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y git python3 python3-pip python3-venv \
  libatlas-base-dev libjpeg-dev libqtgui4 libqt4-test
```

สร้าง virtual env สำหรับโค้ด Computer Vision:

```bash
python3 -m venv ~/cv-env
source ~/cv-env/bin/activate
pip install --upgrade pip
```

## 3. ติดตั้ง OpenCV และ libraries พื้นฐาน

ภายใน virtual env:

```bash
pip install opencv-python numpy pillow matplotlib
```

ทดสอบ:

```python
python - << 'EOF'
import cv2
print(\"OpenCV:\", cv2.__version__)
EOF
```

ถ้าติดตั้งไม่สำเร็จ (เช่น มีปัญหากับ wheel บนสถาปัตยกรรมของบอร์ด) อาจต้องใช้แพ็กเกจจาก `apt` หรือ build จาก source ซึ่งสามารถเพิ่มเป็น tutorial ระดับ advanced ภายหลังได้

## 4. เชื่อมต่อกล้อง

บนบางรุ่นของ Radxa DRAGON Q6A:

- กล้องอาจต่อผ่าน CSI หรือ USB  
- ในขั้นแรกแนะนำเริ่มจาก **USB camera** เพื่อความง่าย

ทดสอบอุปกรณ์:

```bash
ls /dev/video*
```

ควรเห็น `/dev/video0` เป็นต้น จากนั้นลองอ่านภาพด้วย OpenCV:

```python
python - << 'EOF'
import cv2

cap = cv2.VideoCapture(0)
ret, frame = cap.read()
cap.release()

print(\"ret=\", ret, \"shape=\", None if frame is None else frame.shape)
EOF
```

ถ้าได้ `ret=True` และมี `shape` แสดงว่าอ่านภาพจากกล้องได้แล้ว

## 5. โครงโฟลเดอร์สำหรับโปรเจกต์ Edge บน Radxa

แนะนำให้ใช้โครงคล้ายกับ Pi:

```text
~/projects/
  computer-vision/          # clone repo ตัวอย่าง
  edge-services-radxa/      # สคริปต์เฉพาะสำหรับ Radxa DRAGON Q6A
  logs/
```

เช่น:

```bash
cd ~/projects
git clone https://github.com/pwd-vw/computer-vision.git
```

จากนั้นสามารถใช้ tutorial เดียวกับ Pi (ดัดแปลง path เล็กน้อย) เพื่อ:

- อ่านภาพจากกล้อง
- ประมวลผลเบื้องต้นด้วย OpenCV
- ส่งผลลัพธ์ไปยัง API บน Cloudflare / backend

## 6. การรันเป็น service และการ monitor

แนวทางคล้าย Pi:

- เขียนสคริปต์ Python ให้ทำงานเป็น loop
- สร้าง systemd service เช่น `radxa-cv.service`
- เก็บ log ลงโฟลเดอร์ `~/projects/logs`

ตัวอย่าง unit file:

```ini
[Unit]
Description=Radxa DRAGON Q6A Computer Vision Edge Service

[Service]
ExecStart=/home/USER/cv-env/bin/python /home/USER/projects/edge-services-radxa/main.py
WorkingDirectory=/home/USER/projects/edge-services-radxa
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

> แทน `USER` ด้วยชื่อผู้ใช้จริงของคุณ

## 7. การออกแบบ tutorial ต่อไป

จากพื้นฐานนี้ คุณสามารถสร้าง tutorial เพิ่มเติมสำหรับ Radxa DRAGON Q6A ได้ เช่น:

- การรันโมเดล Object Detection แบบเบา ๆ บนบอร์ด  
- การส่ง log + metrics ขึ้นไปเก็บใน Cloudflare / GCP / Supabase  
- การทำ dashboard บน `www.bs4u-tech.com` เพื่อติดตามสถานะ edge devices

ในเว็บหลัก คุณอาจมี section **“Edge Devices / Tutorials”** ที่ลิงก์ไปยังบทความเหล่านี้ และเชื่อมโยงกับโค้ดจริงใน GitHub (`edge-services-radxa` repo) เมื่อคุณสร้างในอนาคต

