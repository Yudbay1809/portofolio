# Panduan Setup EmailJS Dashboard

Agar formulir di website Anda dapat mengirim email, Anda perlu melakukan konfigurasi di dashboard EmailJS. Ikuti langkah-langkah berikut:

## 1. Tambahkan Email Service
- Login ke [EmailJS](https://dashboard.emailjs.com/).
- Pergi ke menu **Email Services**.
- Klik **Add New Service**.
- Pilih layanan email Anda (misalnya Gmail atau Outlook).
- Berikan nama (bebas) dan klik **Connect Account**.
- Setelah selesai, Anda akan mendapatkan **Service ID** (ini sudah kita masukkan ke `.env.local`).

## 2. Buat Email Template
- Pergi ke menu **Email Templates**.
- Klik **Create New Template**.
- Anda akan melihat editor email. Sesuaikan isinya sesuka Anda.
- **PENTING**: Gunakan nama variabel yang persis sama dengan yang ada di kode kita:
  - `{{from_name}}` -> Untuk menangkap nama pengirim.
  - `{{from_email}}` -> Untuk menangkap email pengirim.
  - `{{message}}` -> Untuk menangkap isi pesan.
- Pada bagian **To Email**, masukkan email Anda sendiri agar pesannya masuk ke sana.
- Klik **Save**. Anda akan melihat **Template ID** (ini juga sudah kita masukkan ke `.env.local`).

## 3. Pastikan Public Key Benar
- Pergi ke menu **Account** (ikon profil di pojok kanan atas).
- Klik tab **API Keys**.
- Pastikan **Public Key** yang tertera sama dengan yang ada di `.env.local`.

---

### Tips Keamanan (PENTING)
Dalam kode terbaru, saya sudah memindahkan kunci-kunci Anda ke dalam file `.env.local`. 

> [!WARNING]
> File `.env.local` bersifat rahasia dan tidak akan di-upload ke GitHub (sudah masuk di `.gitignore`). Jika Anda men-deploy website ini ke **Vercel** atau **Netlify**, Anda harus memasukkan variabel-variabel tersebut secara manual di bagian **Environment Variables** di dashboard mereka.

### Variabel yang Digunakan:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

---

Sekarang silakan coba kirim pesan melalui website Anda. Jika muncul pesan "Sent!", berarti konfigurasi sudah benar!
