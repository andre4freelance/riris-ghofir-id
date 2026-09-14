# Katalog Aset Foto Produk — Riris Ghofir Boutique (`public/images/products/`)

Dokumentasi ini dibuat untuk memandu AI agent dan pengembang dalam mengenali, memanfaatkan, dan memperluas aset foto busana butik **Riris Ghofir** (`@ririsghofir.official`).

---

## 1. Ikhtisar & Naming Convention

Semua foto produk telah dinormalisasi dari format raw Instagram (`hash_n.jpg.jpeg`) menjadi format standar web `.jpg` berbasis nama koleksi, sub-kategori, dan sudut bidik (*shot angle*):

`[nama-produk-kebab-case]-[nomor-urutan]-[deskripsi-sudut].jpg`

File utama produk dinamai `[nama-produk-kebab-case].jpg` (alias dari `-01.jpg`) agar sinkron langsung dengan schema data `src/data/catalog.ts`.

---

## 2. Pemetaan Foto & Produk (`catalog.ts`)

### Set 1: Royal Emerald Kebaya Couture (ID: `rg-01`)
- **Kategori:** `kebaya`
- **Koleksi:** Indonesia Fashion Aesthetic (IFA) 2026 Runway
- **Material:** French Tulle x Bordir Tangan Emas x Payet Swarovsky
- **Badge:** `Runway Piece`
- **Daftar File:**
  1. `royal-emerald-kebaya.jpg` / `royal-emerald-kebaya-01.jpg`
     - **Shot:** Panggung IFA Runway, pose tengah (*front stage pose*) berlatar backdrop resmi "Indonesia Fashion Aesthetic".
     - **Fungsi:** Foto utama kartu katalog dan cover lookbook runway.
  2. `royal-emerald-kebaya-02.jpg` / `royal-emerald-kebaya-02-trail.jpg`
     - **Shot:** Runway catwalk dinamis dengan selendang/ekor tulle hijau mengembang (*flowing cape/train*).
     - **Fungsi:** Galeri sudut dramatis panggung mode.
  3. `royal-emerald-kebaya-03.jpg` / `royal-emerald-kebaya-03-walk.jpg`
     - **Shot:** Runway catwalk tampak depan (*walking motion*), model memegang siluet rok.
     - **Fungsi:** Galeri detail langkah & siluet gaun.

---

### Set 2: Seraphina Rose Dust Kebaya Modern (ID: `rg-07`)
- **Kategori:** `kebaya`
- **Koleksi:** Surabaya Signature 2026
- **Material:** Brokat 3D Bunga Timbul x Tulle Halus x Kain Bawahan Wastra
- **Badge:** `Signature`
- **Daftar File:**
  1. `rose-dust-kebaya.jpg` / `rose-dust-kebaya-01.jpg`
     - **Shot:** Studio lookbook berlatar pilar lengkung arsitektural (*standing full length*). Kebaya warna rose dust lembut dengan rok bawahan batik/songket elegan.
     - **Fungsi:** Foto utama kartu katalog kebaya modern.
  2. `rose-dust-kebaya-02.jpg` / `rose-dust-kebaya-02-seated.jpg`
     - **Shot:** Studio lookbook posisi duduk santai (*seated pose*) memegang tas jinjing/clutch.
     - **Fungsi:** Galeri gaya padupadan & styling acara resepsi/wisuda.
  3. `rose-dust-kebaya-03.jpg` / `rose-dust-kebaya-03-detail.jpg`
     - **Shot:** Medium close-up 3/4 badan (*close-up detail*), menonjolkan tekstur bordir 3D floral, kerah sabrina tertutup hijab-friendly, dan kerapian jahitan butik.
     - **Fungsi:** Galeri detail material kain & artisan embroidery.

---

### Set 3: Noir Pearl Embroidered Tunic / Contemporary Modest Daily (ID: `rg-04`)
- **Kategori:** `tunic-outer`
- **Koleksi:** Contemporary Modest Daily
- **Material:** Premium Woolpeach x Aksen Bordir & Mutiara
- **Badge:** `Signature`
- **Daftar File:**
  1. `noir-pearl-tunic.jpg` / `noir-pearl-tunic-01.jpg`
     - **Shot:** Outdoor urban lifestyle (*full standing*), model mengenakan setelan tunik bordir hitam dengan celana senada, kacamata hitam, dan hijab elegan.
     - **Fungsi:** Foto utama kartu katalog tunik & busana harian mewah.
  2. `noir-pearl-tunic-02.jpg` / `noir-pearl-tunic-02-walk.jpg`
     - **Shot:** Outdoor urban lifestyle (*walking stride motion*), menampilkan fleksibilitas dan kenyamanan gerak busana modest modern.
     - **Fungsi:** Galeri gaya hidup wanita eksekutif dan modest wear harian.
  3. `noir-pearl-tunic-03.jpg` / `noir-pearl-tunic-03-detail.jpg`
     - **Shot:** Medium shot (*portrait close-up*) menonjolkan potongan kerah shanghai, aksen kancing, dan bordir mewah di dada/lengan.
     - **Fungsi:** Galeri detail busana dan foto profil perancang.

---

## 3. Direktori Pendukung Terkait

Selain folder `public/images/products/`, aset turunan juga telah disinkronkan ke:
- `public/images/hero/hero-runway-emerald.jpg` — Banner editorial di Hero Section.
- `public/images/categories/kebaya.jpg` — Tile navigasi kategori Kebaya.
- `public/images/categories/modest-gown.jpg` — Tile navigasi kategori Modest Gown.
- `public/images/designer/designer-riris-ghofir.jpg` — Profil visual desainer.

---

## 4. Panduan untuk AI / Developer Selanjutnya

1. Saat menambah produk baru, gunakan penamaan seragam: `[nama-produk].jpg` untuk foto utama dan `[nama-produk]-[02|03]-[deskripsi].jpg` untuk galeri sudut tambahan.
2. Daftarkan path gambar pada `src/data/catalog.ts` pada properti `image` dan `gallery`.
3. Komponen `ImageWithFallback.tsx` akan otomatis menampilkan placeholder editorial SVG berestetika Zalora jika file gambar belum tersedia secara fisik, sehingga build dan rendering tidak akan pernah rusak.
