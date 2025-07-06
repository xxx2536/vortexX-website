# 🚀 VortexX Website Deployment Guide

คู่มือการ deploy เว็บไซต์ VortexX ไปยัง domain จริง

## 📋 ขั้นตอนการ Deploy

### 1. ซื้อ Domain Name
- ไปที่ [Namecheap](https://www.namecheap.com/) หรือ [GoDaddy](https://www.godaddy.com/)
- ซื้อ domain: `VortexX.com`
- ราคาประมาณ $10-15 ต่อปี

### 2. เลือก Hosting Provider

#### ตัวเลือกที่ 1: Netlify (แนะนำ - ฟรี)
1. ไปที่ [netlify.com](https://netlify.com)
2. สร้างบัญชีใหม่
3. คลิก "New site from Git"
4. เชื่อมต่อ GitHub repository
5. Deploy อัตโนมัติ

#### ตัวเลือกที่ 2: Vercel (ฟรี)
1. ไปที่ [vercel.com](https://vercel.com)
2. สร้างบัญชีใหม่
3. Import GitHub repository
4. Deploy อัตโนมัติ

#### ตัวเลือกที่ 3: GitHub Pages (ฟรี)
1. สร้าง GitHub repository
2. อัพโหลดไฟล์ทั้งหมด
3. เปิด GitHub Pages ใน Settings
4. ตั้งค่า custom domain

### 3. ตั้งค่า Custom Domain

#### สำหรับ Netlify:
1. ไปที่ Site settings > Domain management
2. คลิก "Add custom domain"
3. ใส่: `VortexX.com`
4. ตั้งค่า DNS records

#### สำหรับ Vercel:
1. ไปที่ Project settings > Domains
2. เพิ่ม domain: `VortexX.com`
3. ตั้งค่า DNS records

### 4. ตั้งค่า DNS Records

ใน domain registrar ของคุณ ตั้งค่า DNS records:

```
Type: A
Name: @
Value: [IP ของ hosting provider]

Type: CNAME
Name: www
Value: VortexX.com
```

#### Netlify DNS:
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

#### Vercel DNS:
```
Type: A
Name: @
Value: 76.76.19.19

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 5. รอ DNS Propagation
- DNS อาจใช้เวลา 24-48 ชั่วโมง
- ตรวจสอบด้วย [whatsmydns.net](https://whatsmydns.net)

## 🔧 การตั้งค่าเพิ่มเติม

### SSL Certificate
- Netlify และ Vercel มี SSL ฟรี
- ตรวจสอบว่า HTTPS ทำงานได้

### 404 Page
สร้างไฟล์ `404.html`:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Page Not Found - VortexX</title>
    <meta http-equiv="refresh" content="0; url=https://vortexx.com">
</head>
<body>
    <p>Redirecting to <a href="https://vortexx.com">VortexX.com</a>...</p>
</body>
</html>
```

### Redirects
สร้างไฟล์ `_redirects` (สำหรับ Netlify):
```
/*    https://vortexx.com/:splat    301
```

## 📊 การตรวจสอบ

### 1. ตรวจสอบเว็บไซต์
- เปิด `https://VortexX.com`
- ตรวจสอบว่าโหลดได้ปกติ
- ทดสอบฟีเจอร์ต่างๆ

### 2. ตรวจสอบ SEO
- ใช้ [Google Search Console](https://search.google.com/search-console)
- เพิ่ม sitemap: `https://VortexX.com/sitemap.xml`
- ตรวจสอบ robots.txt

### 3. ตรวจสอบ Performance
- ใช้ [PageSpeed Insights](https://pagespeed.web.dev/)
- ตรวจสอบ Core Web Vitals
- ปรับปรุงตามคำแนะนำ

## 🛠️ การบำรุงรักษา

### การอัปเดตเว็บไซต์
1. แก้ไขไฟล์ใน local
2. Push ไปยัง GitHub
3. Hosting จะ deploy อัตโนมัติ

### การสำรองข้อมูล
- ไฟล์ทั้งหมดอยู่ใน GitHub
- ใช้ Git เพื่อติดตามการเปลี่ยนแปลง

### การติดตาม Analytics
- เพิ่ม Google Analytics
- ใช้ Google Search Console
- ติดตาม Performance

## 🆘 การแก้ไขปัญหา

### DNS ไม่ทำงาน
- ตรวจสอบ DNS records
- รอ DNS propagation
- ติดต่อ domain registrar

### SSL ไม่ทำงาน
- ตรวจสอบ DNS settings
- รอ 24 ชั่วโมง
- ติดต่อ hosting provider

### เว็บไซต์ไม่โหลด
- ตรวจสอบ deployment logs
- ตรวจสอบไฟล์ index.html
- ติดต่อ hosting provider

## 📞 ติดต่อ Support

- **Netlify Support**: support@netlify.com
- **Vercel Support**: support@vercel.com
- **GitHub Support**: support@github.com

---

**VortexXstore** 🎮 - Leading Gaming Solutions Provider