---
title: "เตรียม Raspberry Pi 5 สำหรับ Computer Vision และ Edge AI"
device: "raspberry-pi5"
order: 1
level: "beginner"
description: "ตั้งค่า Raspberry Pi OS, เปิดใช้งานกล้อง, ติดตั้ง Python + OpenCV สำหรับงาน Computer Vision บน Edge"
githubPath: ""
---

# เตรียม Raspberry Pi 5 สำหรับ Computer Vision และ Edge AI

บทนี้เน้นตั้งค่า Raspberry Pi 5 ให้พร้อมสำหรับรันโปรเจกต์ Computer Vision / Edge AI เช่น ตัวอย่างใน repo `pwd-vw/computer-vision` และบริการที่จะรันร่วมกับ Cloudflare / cloud อื่น ๆ

## 1. เลือกอุปกรณ์ให้เหมาะกับงาน Edge

แนะนำชุดพื้นฐาน:

- Raspberry Pi 5 (แนะนำรุ่น 8GB ถ้าจะรันโมเดลใหญ่)
- Official Power Supply 27W
- MicroSD Card อย่างน้อย 32–64GB (Class 10)
- Raspberry Pi Camera Module หรือ USB Camera
- เคสพร้อมพัดลม/ฮีตซิงก์ (สำคัญสำหรับงานที่ใช้ CPU หนัก)

## 2. เตรียม Raspberry Pi OS

1. ดาวน์โหลด **Raspberry Pi Imager** จาก `raspberrypi.com`
2. เลือก OS: `Raspberry Pi OS (64-bit)`
3. ตั้งค่าเบื้องต้น (ถ้ามีเมนู Advanced):
   - Hostname: `pi-edge.local` (หรือชื่อที่จำง่าย)
   - เปิดใช้งาน SSH
   - ตั้ง username/password
   - ตั้งค่า Wi-Fi (ถ้าจะใช้ Wi-Fi)
4. เขียน OS ลง microSD แล้วใส่ใน Pi 5
5. เปิดเครื่องและรอให้บูตครั้งแรกเสร็จ

## 3. อัปเดตระบบและติดตั้งแพ็กเกจพื้นฐาน

เปิด Terminal หรือ SSH เข้าไปที่ Pi 5:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y git python3 python3-pip python3-venv \
  libatlas-base-dev libjpeg-dev libqtgui4 libqt4-test
```

ถ้าต้องการแยก environment สำหรับ Computer Vision:

```bash
python3 -m venv ~/cv-env
source ~/cv-env/bin/activate
pip install --upgrade pip
```

## 4. ติดตั้ง OpenCV และ libraries พื้นฐาน

ใน virtual env (หรือระบบหลักถ้าสะดวก):

```bash
pip install opencv-python numpy pillow matplotlib
```

ทดสอบ:

```python
python - << 'EOF'
import cv2, numpy as np
print("OpenCV version:", cv2.__version__)
EOF
```

ควรเห็นเวอร์ชันของ OpenCV แสดงออกมาโดยไม่มี error

## 5. เปิดใช้งานกล้อง

บน Raspberry Pi OS รุ่นใหม่ ให้ใช้เมนู `raspi-config`:

```bash
sudo raspi-config
```

แล้ว:

1. เลือก `Interface Options`
2. เปิด `Camera`
3. รีบูตเครื่อง

ทดสอบกล้อง:

```bash
libcamera-still -o test.jpg
```

หรือจะเขียนสคริปต์ Python เล็ก ๆ ใช้ OpenCV อ่านภาพจากกล้องก็ได้

## 6. โครงโฟลเดอร์สำหรับโปรเจกต์ Edge

แนะนำให้จัดโครงประมาณนี้ใน Pi:

```text
~/projects/
  computer-vision/           # clone จาก GitHub pwd-vw/computer-vision
  edge-services/             # สคริปต์ service ที่จะรันบน Pi
  logs/                      # log ต่าง ๆ
```

เช่น:

```bash
cd ~/projects
git clone https://github.com/pwd-vw/computer-vision.git
```

จากนั้นสามารถเปิด `chapter_01`–`chapter_08` แล้วรัน notebook บางส่วนแบบแปลงเป็นสคริปต์ Python ให้เหมาะกับการรันบน Pi ได้

## 7. เชื่อมต่อกับ Cloud / Cloudflare

แนวคิดสำหรับ edge pipeline:

- Pi 5 รันสคริปต์ที่อ่านภาพจากกล้อง → ประมวลผลเบื้องต้น (เช่น resize, filter, detect objects)
- ส่งผลลัพธ์ (เช่น JSON, รูปภาพที่ย่อแล้ว) ไปยัง API ที่โฮสต์บน Cloudflare Workers/Pages Functions หรือ backend อื่น
- บนเว็บ `www.bs4u-tech.com` แสดง dashboard ที่อ่านข้อมูลจาก API เหล่านี้

ในบท tutorial ถัดไปจะเจาะลึกการ:

- เขียน service เล็ก ๆ บน Pi ที่รันเป็น systemd service
- ส่งข้อมูลไปหา endpoint บน Cloudflare
- ใช้โครงสร้างเดียวกันกับตัวอย่างใน repo `computer-vision`

