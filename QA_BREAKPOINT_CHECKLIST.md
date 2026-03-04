# Responsive QA Checklist

## Scope
Checklist QA untuk breakpoint:
- 360x800
- 390x844
- 768x1024
- 1024x768
- 1366x768
- 1920x1080

Metode validasi turn ini:
- Audit struktur responsif komponen + CSS rule per breakpoint.
- Verifikasi teknis lewat `npm run lint` dan `npm run build`.

## Global Checks
- [x] Tidak ada horizontal overflow dari layout utama.
- [x] Navbar tetap usable di semua breakpoint.
- [x] CTA utama tetap terlihat di atas fold pada mobile.
- [x] Typographic scale tetap terbaca.
- [x] Section spacing tidak terlalu padat/longgar.
- [x] Elemen fixed/sticky (progress bar, back-to-top) tidak menutupi konten utama.
- [x] Fitur desktop-only (dot navigator) tidak muncul di mobile.
- [x] Snap/step scroll tidak dipaksakan pada viewport tinggi pendek.

## Breakpoint Detail

### 360x800
Status: Pass setelah perapihan
- [x] Hero heading dan body text diperkecil untuk menghindari crowding.
- [x] Tagline typewriter tracking diperkecil agar tidak cepat wrap.
- [x] Tombol CTA Hero dibuat `w-full` di mobile agar rapi dan mudah tap.
- [x] About location badge tidak overflow karena mode full-width mobile.

Perbaikan yang diterapkan:
- `Hero.jsx`: `text-3xl`, `text-sm`, CTA `w-full sm:w-auto`, tracking adaptif.
- `About.jsx`: badge mobile adaptive (`left/right`), min-height gambar mobile diturunkan.

### 390x844
Status: Pass setelah perapihan
- [x] Struktur mirip 360x800 tetap stabil.
- [x] Jarak container dan card tidak terlalu sempit.
- [x] Interaksi tombol dan chips tetap nyaman.

Perbaikan yang diterapkan:
- `App.jsx`: container padding jadi `px-4 sm:px-6 lg:px-8`.

### 768x1024
Status: Pass setelah perapihan
- [x] Navbar tidak terlalu padat.
- [x] Menu navigasi tetap mudah diakses.
- [x] Layout section 1 kolom/2 kolom tetap seimbang.

Perbaikan yang diterapkan:
- `Navbar.jsx`: desktop nav dipindah dari `md` ke `lg`, sehingga 768 memakai mobile menu yang lebih aman.

### 1024x768
Status: Pass setelah perapihan
- [x] Snap/step scroll tidak mengganggu pada tinggi layar pendek.
- [x] Section tetap bisa discroll natural.

Perbaikan yang diterapkan:
- `App.jsx`: wheel step-scroll hanya aktif saat `(min-width:1024px) and (min-height:820px)`.
- `index.css`: scroll snap dinonaktifkan untuk `(min-width:1024px) and (max-height:819px)`.

### 1366x768
Status: Pass setelah perapihan
- [x] Sama seperti 1024x768: tidak dipaksa snap-step.
- [x] Navbar desktop tampil normal dan tidak crowding.
- [x] Dot navigator tetap aman di sisi kanan.

Perbaikan yang diterapkan:
- Reuse rule tinggi pendek (`max-height:819px`) untuk menonaktifkan snap.

### 1920x1080
Status: Pass
- [x] Snap-step storytelling aktif sesuai desain premium.
- [x] Dot navigator tampil dan sinkron dengan active section.
- [x] Komposisi whitespace dan section depth tetap proporsional.

## Files touched in this QA pass
- `src/App.jsx`
- `src/components/Navbar.jsx`
- `src/components/Hero.jsx`
- `src/components/About.jsx`
- `src/index.css`

## Verification Commands
- `npm run lint` -> pass
- `npm run build` -> pass