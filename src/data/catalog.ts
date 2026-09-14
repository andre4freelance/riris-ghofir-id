export interface FashionProduct {
  id: string;
  name: string;
  category: "kebaya" | "tunic-outer";
  collection: string;
  material: string;
  priceDisplay: string;
  badge?: "Runway Piece" | "Signature" | "New Arrival" | "Made to Order";
  image: string;
  gallery?: string[];
  description: string;
  details: string[];
  sizes: string[];
}

export interface BoutiqueCategory {
  id: string;
  name: string;
  slug: "all" | "kebaya" | "tunic-outer";
  count: number;
}

export const CATEGORIES: BoutiqueCategory[] = [
  { id: "cat-1", name: "Semua Koleksi", slug: "all", count: 3 },
  { id: "cat-2", name: "Signature Kebaya", slug: "kebaya", count: 2 },
  { id: "cat-3", name: "Tunic & Modest Wear", slug: "tunic-outer", count: 1 }
];

export const PRODUCTS: FashionProduct[] = [
  {
    id: "rg-01",
    name: "Royal Emerald Kebaya Couture",
    category: "kebaya",
    collection: "Indonesia Fashion Aesthetic Runway",
    material: "French Tulle x Bordir Tangan Emas x Payet Swarovsky",
    priceDisplay: "Custom Bespoke / Konsultasi",
    badge: "Runway Piece",
    image: "/images/products/royal-emerald-kebaya.jpg",
    gallery: [
      "/images/products/royal-emerald-kebaya.jpg",
      "/images/products/royal-emerald-kebaya-02-trail.jpg",
      "/images/products/royal-emerald-kebaya-03-walk.jpg"
    ],
    description: "Kebaya couture siluet modern dengan detail bordir manual bernuansa flora Jawa klasik yang dipadukan dengan aksen struktural modern Eropa. Dilengkapi selendang sutra satin tersemat yang anggun dan syar'i-friendly.",
    details: [
      "Bordir manual presisi tinggi oleh artisan bordir berpengalaman",
      "Aplikasi kristal & payet jepang halus tahan lama",
      "Potongan tailored fit membingkai siluet dengan anggun dan tertutup",
      "Termasuk bustier sutra senada ramah hijab"
    ],
    sizes: ["Custom Fitting di Butik", "S", "M", "L", "XL"]
  },
  {
    id: "rg-02",
    name: "Noir Pearl Embroidered Tunic",
    category: "tunic-outer",
    collection: "Contemporary Modest Wear",
    material: "Premium Woolpeach x Mutiara Air Tawar Sintetis",
    priceDisplay: "Rp 1.450.000",
    badge: "Signature",
    image: "/images/products/noir-pearl-tunic.jpg",
    gallery: [
      "/images/products/noir-pearl-tunic.jpg",
      "/images/products/noir-pearl-tunic-02-walk.jpg",
      "/images/products/noir-pearl-tunic-03-detail.jpg"
    ],
    description: "Tunik hitam klasik dengan taburan mutiara dan bordir geometris terinspirasi estetika minimalis modern. Potongan loose syar'i yang sangat serasi dipadukan dengan celana palazzo atau rok plisket.",
    details: [
      "Material woolpeach tebal tidak menerawang, jatuh lembut, dan tidak mudah kusut",
      "Aksen mutiara dijahit tangan kuat satu per satu",
      "Kerah shanghai minimalis dengan kancing bungkus rapi",
      "Saku tersembunyi fungsional di kedua sisi"
    ],
    sizes: ["All Size (Fit to XL)", "S-M", "L-XL"]
  },
  {
    id: "rg-03",
    name: "Seraphina Rose Dust Kebaya Modern",
    category: "kebaya",
    collection: "Surabaya Signature 2026",
    material: "Brokat 3D Bunga Timbul x Tulle Halus",
    priceDisplay: "Mulai Rp 2.650.000",
    badge: "Signature",
    image: "/images/products/rose-dust-kebaya.jpg",
    gallery: [
      "/images/products/rose-dust-kebaya.jpg",
      "/images/products/rose-dust-kebaya-02-seated.jpg",
      "/images/products/rose-dust-kebaya-03-detail.jpg"
    ],
    description: "Kebaya modern warna rose dust lembut dengan aksen bordir floral 3D timbul. Memberikan kesan muda, segar, santun, dan anggun untuk resepsi keluarga, lamaran, atau wisuda.",
    details: [
      "Bordir 3 dimensi berdimensi artistik dengan kilau lembut",
      "Kerah sabrina tertutup ramah hijab",
      "Termasuk kamisol katun stretch yang sejuk dan tidak panas",
      "Jahitan tepi halus berstandar atelier butik"
    ],
    sizes: ["S", "M", "L", "XL", "Bespoke Size"]
  }
];

export const BOUTIQUE_INFO = {
  name: "Riris Ghofir Boutique",
  shortName: "RIRIS GHOFIR",
  tagline: "Contemporary Modest Atelier & Signature Kebaya",
  city: "Surabaya, Jawa Timur",
  address: "Jl. Ngagel Jaya No. 96, Pucang Sewu, Kec. Gubeng, Surabaya, Jawa Timur 60283",
  whatsappNumber: "6281335110650",
  whatsappDisplay: "+62 813-3511-0650",
  instagram: "@ririsghofir.official",
  instagramUrl: "https://www.instagram.com/ririsghofir.official/",
  facebook: "Riris Ghofir Official",
  facebookUrl: "https://www.facebook.com/ririsghofirofficial/",
  openingHours: "Senin – Sabtu: 09.00 – 18.00 WIB (Minggu: By Appointment)",
  mapsEmbedUrl: "https://maps.google.com/maps?q=Jl.+Ngagel+Jaya+No.+96+Surabaya&t=&z=15&ie=UTF8&iwloc=&output=embed"
};
