export interface FashionProduct {
  id: string;
  name: string;
  category: "kebaya" | "songket" | "modest-luxury" | "tunic-outer" | "bridal-couture";
  collection: string;
  material: string;
  priceDisplay: string;
  badge?: "Runway Piece" | "Signature" | "New Arrival" | "Made to Order";
  image: string;
  description: string;
  details: string[];
  sizes: string[];
}

export interface BoutiqueCategory {
  id: string;
  name: string;
  slug: "all" | "kebaya" | "songket" | "modest-luxury" | "tunic-outer" | "bridal-couture";
  count: number;
}

export const CATEGORIES: BoutiqueCategory[] = [
  { id: "cat-1", name: "Semua Koleksi", slug: "all", count: 8 },
  { id: "cat-2", name: "Signature Kebaya", slug: "kebaya", count: 2 },
  { id: "cat-3", name: "Songket Couture", slug: "songket", count: 2 },
  { id: "cat-4", name: "Luxury Modest Sets", slug: "modest-luxury", count: 2 },
  { id: "cat-5", name: "Tunic & Outerwear", slug: "tunic-outer", count: 1 },
  { id: "cat-6", name: "Bridal & Bespoke", slug: "bridal-couture", count: 1 }
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
    description: "Kebaya couture siluet modern dengan detail bordir manual bernuansa flora Jawa klasik yang dipadukan dengan aksen struktural modern Eropa. Dilengkapi selendang sutra satin tersemat.",
    details: [
      "Bordir manual presisi tinggi oleh artisan bordir berpengalaman",
      "Aplikasi kristal & payet jepang halus tahan lama",
      "Potongan tailored fit membingkai siluet dengan anggun",
      "Termasuk bustier sutra senada"
    ],
    sizes: ["Custom Fitting di Butik", "S", "M", "L"]
  },
  {
    id: "rg-02",
    name: "Maharani Songket Peplum Set",
    category: "songket",
    collection: "Heritage Palembang Luxe",
    material: "Songket Tenun Asli Benang Emas x Sutra Organza",
    priceDisplay: "Mulai Rp 3.850.000",
    badge: "Signature",
    image: "/images/products/maharani-songket-peplum.jpg",
    description: "Perpaduan rok songket tenun tangan tradisional Palembang dengan atasan peplum beraksen drape organza asimetris. Memberikan nuansa regal yang memikat untuk resepsi dan gala.",
    details: [
      "Wastra tenun songket asli benang emas pilihan",
      "Kombinasi peplum modern yang ramah postur tubuh",
      "Furing katun silk premium yang adem dan nyaman",
      "Jahitan butik butik halus (couture finish)"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "rg-03",
    name: "Aura Champagne Modest Gown",
    category: "modest-luxury",
    collection: "Surabaya Signature 2026",
    material: "Silk Satin Doff x Lace Chantilly Bordir Halus",
    priceDisplay: "Mulai Rp 2.950.000",
    badge: "New Arrival",
    image: "/images/products/aura-champagne-gown.jpg",
    description: "Gaun muslimah berpotongan A-line lebar dengan detail renda Chantilly pada lengan dan dada. Kesan mewah yang bersahaja, dirancang khusus untuk wanita aktif dan elegan.",
    details: [
      "Siluet modest syar'i-friendly yang longgar namun berstruktur",
      "Lengan wudhu-friendly dengan zipper tersembunyi beraksen mutiara",
      "Jatuh kain sangat flowy dan mewah saat melangkah",
      "Tersedia pilihan warna Champagne, Dusty Rose, dan Midnight Navy"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "rg-04",
    name: "Noir Pearl Embroidered Tunic",
    category: "tunic-outer",
    collection: "Contemporary Modest Daily",
    material: "Premium Woolpeach x Mutiara Air Tawar Sintetis",
    priceDisplay: "Rp 1.450.000",
    badge: "Signature",
    image: "/images/products/noir-pearl-tunic.jpg",
    description: "Tunik hitam klasik dengan taburan mutiara dan bordir geometris terinspirasi estetika minimalis Korea. Sangat serasi dipadukan dengan celana palazzo atau rok plisket.",
    details: [
      "Material woolpeach tebal tidak menerawang dan tidak mudah kusut",
      "Aksen mutiara dijahit tangan kuat satu per satu",
      "Kerah shanghai minimalis dengan kancing bungkus",
      "Saku tersembunyi fungsional di kedua sisi"
    ],
    sizes: ["All Size (Fit to XL)", "S-M", "L-XL"]
  },
  {
    id: "rg-05",
    name: "Gresik Heritage Songket Kimono Outer",
    category: "songket",
    collection: "East Java Artisanal Series",
    material: "Tenun Songket Eksklusif x Lining Silky Cotton",
    priceDisplay: "Mulai Rp 2.250.000",
    badge: "New Arrival",
    image: "/images/products/songket-kimono-outer.jpg",
    description: "Outer kimono modern bersiluet santai namun kaya akan motif songket warisan pesisir Jawa Timur. Pilihan sempurna untuk layering busana modest harian maupun acara formal.",
    details: [
      "Desain open-front fleksibel untuk berbagai gaya hijab",
      "Kain tenun songket berkarakter tegas",
      "Potongan dropping shoulder modern",
      "Dibuat terbatas hanya beberapa potong per motif"
    ],
    sizes: ["All Size (Chest up to 115 cm)"]
  },
  {
    id: "rg-06",
    name: "Bespoke Royal Akad Kebaya Putih",
    category: "bridal-couture",
    collection: "Bridal Haute Couture",
    material: "French Lace Putih Bersih x Taburan Payet Piringan Kristal",
    priceDisplay: "Custom Bespoke / By Appointment",
    badge: "Made to Order",
    image: "/images/products/bespoke-akad-kebaya.jpg",
    description: "Kebaya akad nikah putih sakral dengan ekor panjang berbahan organza sutra. Dikerjakan dengan proses fitting personal langsung di Butik Riris Ghofir Surabaya.",
    details: [
      "Konsultasi desain 1-on-1 langsung bersama desainer Riris Ghofir",
      "3 kali sesi fitting privat di butik Jl. Ngagel Jaya",
      "Pola kustom mengikuti proporsi tubuh klien",
      "Waktu pengerjaan 4–8 minggu"
    ],
    sizes: ["Bespoke Custom Tailored"]
  },
  {
    id: "rg-07",
    name: "Seraphina Rose Dust Kebaya Modern",
    category: "kebaya",
    collection: "Surabaya Signature 2026",
    material: "Brokat 3D Bunga Timbul x Tulle Halus",
    priceDisplay: "Mulai Rp 2.650.000",
    badge: "Signature",
    image: "/images/products/rose-dust-kebaya.jpg",
    description: "Kebaya modern warna rose dust lembut dengan aksen bordir floral 3D timbul. Memberikan kesan muda, segar, dan anggun untuk resepsi keluarga atau wisuda.",
    details: [
      "Bordir 3 dimensi berdimensi artistik",
      "Kerah sabrina tertutup ramah hijab",
      "Termasuk kamisol katun stretch yang sejuk",
      "Jahitan tepi halus berstandar butik"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "rg-08",
    name: "Celeste Sage Velvet Modest Set",
    category: "modest-luxury",
    collection: "Autumn Modest Runway",
    material: "Silk Velvet Premium x Payet Tembaga Vintage",
    priceDisplay: "Mulai Rp 2.450.000",
    badge: "Runway Piece",
    image: "/images/products/celeste-sage-velvet.jpg",
    description: "Setelan two-piece atasan dan rok berbahan beludru sutra warna sage green. Memantulkan kilau elegan di bawah cahaya lampu pesta.",
    details: [
      "Bahan velvet sutra bertekstur lembut dan berbobot jatuh mewah",
      "Pinggang rok karet elastis dengan zipper samping",
      "Aksen payet tembaga di pergelangan tangan dan leher",
      "Dry clean recommended"
    ],
    sizes: ["S", "M", "L"]
  }
];

export const BOUTIQUE_INFO = {
  name: "Riris Ghofir Boutique",
  shortName: "RIRIS GHOFIR",
  tagline: "Contemporary Modest Atelier & Signature Kebaya",
  city: "Surabaya, Jawa Timur",
  address: "Jl. Ngagel Jaya No. 96, Pucang Sewu, Kec. Gubeng, Surabaya, Jawa Timur 60283",
  whatsappNumber: "6281234567890", // placeholder format internasional
  whatsappDisplay: "+62 812-3456-7890",
  instagram: "@ririsghofir.official",
  instagramUrl: "https://www.instagram.com/ririsghofir.official/",
  facebook: "Riris Ghofir Official",
  facebookUrl: "https://www.facebook.com/ririsghofirofficial/",
  openingHours: "Senin – Sabtu: 09.00 – 18.00 WIB (Minggu: By Appointment)",
  mapsEmbedUrl: "https://maps.google.com/maps?q=Jl.+Ngagel+Jaya+No.+96+Surabaya&t=&z=15&ie=UTF8&iwloc=&output=embed"
};
