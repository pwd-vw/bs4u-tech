---
title: "รันตัวอย่าง Computer Vision จาก GitHub บน Raspberry Pi 5"
device: "raspberry-pi5"
order: 2
level: "intermediate"
description: "นำตัวอย่างโค้ดจาก repo computer-vision มารันบน Pi 5 และส่งผลลัพธ์ขึ้นเว็บ/Cloudflare"
githubPath: "chapter_01"
---

# รันตัวอย่าง Computer Vision จาก GitHub บน Raspberry Pi 5

ต่อจาก tutorial แรกที่เตรียม OS และ OpenCV แล้ว บทนี้จะสาธิตการ:

- clone repo `pwd-vw/computer-vision` ลงบน Pi 5
- แปลงบางส่วนของ `content.md` และ `colab_notebook.ipynb` ให้กลายเป็นสคริปต์ที่รันบน Pi 5
- ส่งผลลัพธ์ (เช่น รูปภาพที่ประมวลผลแล้ว) ขึ้นไปยังเว็บ/Cloudflare

## 1. Clone repo และเตรียม environment

```bash
cd ~/projects
git clone https://github.com/pwd-vw/computer-vision.git

cd computer-vision
source ~/cv-env/bin/activate  # ถ้าใช้ virtual env
pip install -r requirements.txt  # ถ้ามี หรือ pip install ตามที่ต้องการ
```

หาก repo ยังไม่มี `requirements.txt` สามารถเริ่มจาก:

```bash
pip install opencv-python numpy pillow matplotlib
```

## 2. ตัวอย่างสคริปต์: โหลดภาพ + ใส่ filter

สร้างไฟล์ใหม่เช่น `pi_examples/ch01_basic_filters.py`:

```python
import cv2
import numpy as np
from pathlib import Path

INPUT = Path(\"input.jpg\")
OUTPUT = Path(\"output_blur.jpg\")

img = cv2.imread(str(INPUT))
if img is None:
    raise SystemExit(\"ไม่พบไฟล์ input.jpg ลองวางรูปตัวอย่างในโฟลเดอร์เดียวกันก่อนรัน\")

# แปลงเป็น grayscale
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# ใส่ blur
blur = cv2.GaussianBlur(gray, (9, 9), 0)

cv2.imwrite(str(OUTPUT), blur)
print(\"บันทึกผลลัพธ์ที่\", OUTPUT)
```

ลองวางรูป `input.jpg` แล้วรัน:

```bash
python pi_examples/ch01_basic_filters.py
```

## 3. ส่งผลลัพธ์ขึ้น Cloudflare / Backend

สมมติว่าคุณมี endpoint บน Cloudflare Pages Functions เช่น `/api/edge-upload` ที่รับไฟล์ภาพ:

```python
import requests

API_URL = \"https://www.bs4u-tech.com/api/edge-upload\"

with open(\"output_blur.jpg\", \"rb\") as f:
    files = {\"image\": f}
    resp = requests.post(API_URL, files=files, timeout=30)

print(resp.status_code, resp.text)
```

ในฝั่งเว็บสามารถแสดงรายการรูปที่มาจาก Pi 5 หรือใช้ใน dashboard ต่อไป

## 4. รันเป็น service (แนวคิด)

เมื่อสคริปต์ทำงานได้แล้ว คุณสามารถ:

- เขียน loop ให้รันทุก X วินาที หรือใช้ inotify/watch ช่วงที่มีไฟล์ใหม่
- สร้างไฟล์ service `/etc/systemd/system/pi-cv.service` เพื่อให้สคริปต์รันอัตโนมัติเมื่อบูต

ตัวอย่าง unit file (ย่อ ๆ):

```ini
[Unit]
Description=Pi Computer Vision Edge Service

[Service]
ExecStart=/home/pi/cv-env/bin/python /home/pi/projects/computer-vision/pi_examples/ch01_basic_filters.py
WorkingDirectory=/home/pi/projects/computer-vision
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

จากนั้น:

```bash
sudo systemctl daemon-reload
sudo systemctl enable pi-cv.service
sudo systemctl start pi-cv.service
```

## 5. เชื่อมกับหลักสูตรบนเว็บ

ในแต่ละบทเรียนของ `www.bs4u-tech.com` คุณสามารถ:

- แทรก section “Edge demo บน Pi 5” พร้อมลิงก์ไปยัง repo / สคริปต์ `pi_examples`
- อธิบายสั้น ๆ ว่าผู้เรียนสามารถนำ notebook จาก Colab ไปดัดแปลงรันบน Pi 5 ได้อย่างไร

ใน tutorial ถัดไปจะเจาะจงไปที่ Radxa DRAGON Q6A ซึ่งมี OS และแพ็กเกจแตกต่างจาก Pi เล็กน้อย แต่แนวคิด edge pipeline เดียวกัน

