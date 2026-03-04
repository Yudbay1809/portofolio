# Portfolio - Yudha Bayu Prastyo

Portfolio website modern berbasis React + Vite dengan animasi interaktif, mode day/night, navigasi cinematic, dan deploy otomatis ke GitHub Pages.

## Live
- Domain: https://yudbay.dev

## Tech Stack
- React 18
- Vite 5
- Tailwind CSS
- Framer Motion
- React Icons
- gh-pages

## Fitur Utama
- UI modern dengan visual storytelling.
- Mode Day/Night (tersimpan di localStorage).
- Animasi premium:
  - Intro loader.
  - Parallax depth antar section.
  - Smooth reveal transitions.
  - Typewriter tagline.
  - Count-up stats.
  - Cinematic transition saat navigasi.
- Section progress dot navigator (desktop besar).
- Scroll per section (desktop tinggi layar cukup).
- Project filter berdasarkan teknologi.
- Contact action:
  - Klik location -> Google Maps.
  - Klik email -> mailto.
  - Klik WhatsApp -> WhatsApp link.
- Responsif untuk mobile/tablet/desktop.

## Struktur Project
- `src/components/` -> komponen UI per section.
- `src/constants/index.js` -> konten data portfolio.
- `src/index.css` -> global style, theme, animation utilities.
- `QA_BREAKPOINT_CHECKLIST.md` -> checklist QA per breakpoint.
- `QA_SMOKE_TEST.md` -> smoke test 2-3 menit sebelum deploy.

## Menjalankan Secara Lokal
```bash
npm install
npm run dev
```

## Script
```bash
npm run dev      # jalankan mode development
npm run lint     # cek lint
npm run build    # build production
npm run preview  # preview hasil build
npm run deploy   # deploy ke GitHub Pages
```

## Deploy GitHub Pages
Konfigurasi sudah aktif di project ini:
- `homepage` pada `package.json` mengarah ke:
  `https://yudbay.dev`
- `vite.config.js` menggunakan:
  `base: "/"`
- Script deploy:
  - `predeploy`: `npm run build`
  - `deploy`: `gh-pages -d dist`

Deploy manual:
```bash
npm run deploy
```

## Catatan
Jika menjalankan command npm lewat PowerShell dan muncul error execution policy, gunakan:
```powershell
cmd /c npm run <script>
```
Contoh:
```powershell
cmd /c npm run deploy
```
