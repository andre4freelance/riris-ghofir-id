# Riris Ghofir Boutique — Digital Showcase & Catalog (`riris-ghofir-id`)

Modern fashion showcase & digital catalog website for **Riris Ghofir Boutique** (Jl. Ngagel Jaya No. 96, Surabaya, Jawa Timur), crafted with **Zalora Luxury / Modest Fashion Editorial** aesthetic.

## Tech Stack
- **Framework:** Vite + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 + Lucide React
- **Runtime:** Bun (v1.2+)
- **Deployment Target:** Vercel (Subdomain: `ririsghofir.andredev.web.id` / Mirror: `riris-ghofir-id.vercel.app`)

## Features
- **Zalora Editorial Layout:** Clean crisp white background (`#FFFFFF`), deep onyx typography (`#111111`), and champagne gold accents (`#B38E5D`).
- **Decoupled / Image-Agnostic Asset Architecture:** Smart `ImageWithFallback` component with 3:4 fashion ratio and procedural SVG fallbacks for seamless curation of Instagram photos.
- **Interactive Catalog:** Category filtering (Kebaya, Songket, Modest Luxury, Tunik, Bridal Couture) and Quick-View Modal.
- **Direct WhatsApp Conversion:** Pre-filled WhatsApp consultation messages for individual dresses and boutique fitting appointments.
- **Surabaya Atelier Guide:** Physical boutique location, operating hours, and interactive Google Maps embed.

## Development & Deployment
Per workspace rules (`knowledge/ai-working-agreements.md` & `AGENTS.md`), local testing on ThinkPad X230 is avoided. The project is deployed and verified directly on Vercel or running on remote server:

```bash
bun install
bun run dev --host 0.0.0.0 --port 3000
bun run build
```
