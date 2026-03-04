# QA Smoke Test (2-3 Menit)

Gunakan checklist ini sebelum deploy.

## 1) Jalankan Aplikasi
- [ ] Jalankan `npm run dev`.
- [ ] Buka halaman utama tanpa error di console browser.

## 2) Cek Breakpoint Utama
Uji cepat di DevTools (responsive mode):
- [ ] `360x800`
- [ ] `390x844`
- [ ] `768x1024`
- [ ] `1024x768`
- [ ] `1366x768`
- [ ] `1920x1080`

Kriteria pass per ukuran:
- [ ] Tidak ada horizontal scroll.
- [ ] Teks tidak overlap/terpotong.
- [ ] Tombol CTA di Hero terlihat dan bisa diklik.
- [ ] Gambar Hero proporsional (tidak gepeng/terpotong aneh).

## 3) Navigasi
- [ ] Klik menu navbar (About, Education, Tech, Experience, Projects, Contact) berpindah ke section yang benar.
- [ ] Active nav highlight mengikuti section saat scroll.
- [ ] Mobile menu dapat dibuka/ditutup normal.
- [ ] Mobile menu tetap bisa discroll bila tinggi layar kecil.

## 4) Tema Day/Night
- [ ] Toggle tema berfungsi dari navbar.
- [ ] Tema tersimpan setelah refresh (persist localStorage).
- [ ] Kontras teks tetap terbaca di kedua tema.

## 5) Animasi & Storytelling
- [ ] Intro loader tampil singkat lalu hilang normal.
- [ ] Typewriter tagline di Hero berjalan.
- [ ] Count-up stats di Hero berjalan saat terlihat.
- [ ] Dot navigator kanan muncul di desktop besar dan bisa diklik.
- [ ] Cinematic transition muncul saat klik navigasi.

## 6) Scroll Behavior
- [ ] Di desktop tinggi cukup (misal `1920x1080`), scroll step-by-step antar section terasa normal.
- [ ] Di desktop tinggi pendek (`1024x768` / `1366x768`), scrolling tidak terasa memaksa (snap dinonaktifkan).
- [ ] Di mobile/tablet, scrolling tetap natural.

## 7) Kontak & Link Eksternal
- [ ] Tombol `Hubungi Saya` menuju section Contact.
- [ ] Link GitHub membuka URL yang benar.
- [ ] Tombol copy email di Contact bekerja.
- [ ] Link WhatsApp, LinkedIn, Instagram dapat dibuka.

## 8) Final Build Check
- [ ] `npm run lint` pass.
- [ ] `npm run build` pass.
- [ ] Folder `dist/` ter-generate tanpa error.

## Exit Criteria
Siap deploy jika semua item di atas pass.