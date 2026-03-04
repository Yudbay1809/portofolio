# Portfolio - Yudha Bayu Prastyo

Portfolio website modern berbasis React + Vite dengan animasi interaktif, mode day/night, dan navigasi cinematic.

## Live
- Domain: https://yudbay.dev

## Tech Stack
- React 18
- Vite 5
- Tailwind CSS
- Framer Motion
- React Icons
- Vercel

## Fitur Utama
- UI modern dengan visual storytelling.
- Mode Day/Night (tersimpan di localStorage).
- Animasi premium: intro loader, parallax depth, reveal transition, typewriter, count-up stats.
- Cinematic transition saat navigasi + active section highlight.
- Section progress dot navigator (desktop besar).
- Scroll per section untuk desktop tinggi layar cukup.
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
- `vercel.json` -> konfigurasi build/output Vercel.
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
npm run deploy   # deploy ke GitHub Pages (opsional legacy)
```

## Deploy ke Vercel
### Cara 1: via GitHub integration (disarankan)
1. Import repo `Yudbay1809/portofolio` di Vercel.
2. Pastikan setting:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy.

### Cara 2: via CLI
```bash
npx vercel
npx vercel --prod
```

## Custom Domain di Vercel
1. Buka project di Vercel -> `Settings` -> `Domains`.
2. Tambahkan `yudbay.dev` dan `www.yudbay.dev`.
3. Ikuti DNS record yang diminta Vercel sampai status `Valid`.
4. SSL/HTTPS akan aktif otomatis.

## Catatan
Jika menjalankan command npm lewat PowerShell dan muncul error execution policy, gunakan:
```powershell
cmd /c npm run <script>
```