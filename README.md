# BS4U Tech — Computer Vision

เว็บไซต์ให้ความรู้และบริการ Computer Vision (www.bs4u-tech.com): หลักสูตรจากง่ายไปยาก เครื่องมือ Image Filter และบล็อกที่ blog.bs4u-tech.com

## โครงสร้าง

- **Frontend**: Astro (static), โฮสต์บน Cloudflare Pages
- **API**: Cloudflare Pages Functions — `/api/filter` ใช้ Photon WASM สำหรับปรับภาพ
- **เนื้อหาหลักสูตร**: `src/content/learn/*.md` (ลำดับตาม `order` ใน frontmatter)
- **Pipeline เนื้อหา**: โฟลเดอร์ `pipeline/` — ตัวอย่าง Google Cloud Workflows + Cloud Function สำหรับ generate content ด้วย Gemini และ publish ไป Blogger / อัปเดต www ผ่าน Git

## ความต้องการของระบบ

- **Node.js 20** ขึ้นไป (เข้ากันได้กับ Cloudflare Pages ปัจจุบัน — build image ใช้ Node 22 โดยค่าเริ่มต้น โปรเจกต์กำหนดเวอร์ชันผ่าน `.node-version` / `.nvmrc`)

### ติดตั้ง Node.js เวอร์ชันที่เข้ากันได้ (ถ้ายังไม่มี)

**ใช้ nvm (แนะนำ):**
```bash
# ติดตั้ง nvm จาก https://github.com/nvm-sh/nvm แล้ว:
nvm install 20
nvm use 20
```

**ใช้ fnm** (ถ้าติดตั้งไว้แล้ว):
```bash
fnm install 20
fnm use 20
```

**หรือดาวน์โหลดโดยตรง:** [Node.js 20 LTS](https://nodejs.org/) (เลือกเวอร์ชัน 20.x)

จากนั้นในโฟลเดอร์โปรเจกต์:
```bash
npm install
npm run dev
```

## การพัฒนา

```bash
npm install
npm run dev
```

### หลัง npm install — การแจ้งเตือนที่อาจเห็น

- **ไม่มี fnm** — ไม่ต้องติดตั้ง fnm ถ้าคุณมี Node/npm อยู่แล้ว (เช่น ติดตั้งจาก nodejs.org หรือ nvm) โปรเจกต์ใช้ได้ปกติ
- **deprecated (sourcemap-codec, rollup-plugin-inject ฯลฯ)** — เป็น dependency ย่อยของ Astro/Wrangler ไม่ต้องแก้เอง จะค่อยหายเมื่อ upstream อัปเดต
- **vulnerabilities** — ถ้าต้องการลดจำนวน:
  - รัน `npm audit fix` (ไม่ใส่ `--force`) ก่อน; ถ้า build ผ่านก็ใช้ได้
  - หลีกเลี่ยง `npm audit fix --force` เว้นแต่จะทดสอบแล้ว เพราะอาจเปลี่ยน major version แล้วทำให้ build พัง
- **npm มีเวอร์ชันใหม่** — การอัปเดต npm เป็น 11.x เป็นตัวเลือก ไม่จำเป็นสำหรับโปรเจกต์นี้

## Deploy ไป Cloudflare Pages

1. **เชื่อม GitHub กับ Cloudflare Pages**  
   - Dashboard → Pages → Create project → Connect to Git  
   - เลือก repo นี้ กำหนด build command: `npm run build` (หรือ `npx astro build`)  
   - Build output directory: `dist`  
   - เปิดใช้ **Pages Functions** (โฟลเดอร์ `functions/` จะถูก deploy โดยอัตโนมัติ)

2. **หรือ Direct Upload**  
   ```bash
   npm run build
   npx wrangler pages deploy dist --project-name=bs4u-tech
   ```

## หลัง Deploy

- แก้ **GitHub ตัวอย่างโค้ด**: ใน `src/content/learn/*.md` และ `src/pages/learn/[...slug].astro` แทน `your-org` ด้วย GitHub org/user จริง และสร้าง repo `bs4u-cv-examples` ตามโครง `01-intro`, `02-image-basics`, … พร้อม Notebook สำหรับ Colab
- **AdSense**: หลังอนุมัติ site ให้ uncomment และใส่ `ca-pub-XXXXXXXXXX` ใน `src/layouts/BaseLayout.astro`

## Pipeline เนื้อหาอัตโนมัติ

ดูคำอธิบายและตัวอย่างในโฟลเดอร์ `pipeline/` สำหรับการตั้งค่า Google Cloud Workflows + Cloud Function (Gemini + Blogger API + อัปเดต www ผ่าน Git push หรือ Pages API).
