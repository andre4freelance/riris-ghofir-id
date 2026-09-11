import React from "react";
import { ArrowUpRight } from "lucide-react";

interface CategoryTile {
  title: string;
  subtitle: string;
  tag: string;
  link: string;
  image: string;
}

const TILES: CategoryTile[] = [
  {
    title: "Signature Kebaya",
    subtitle: "Siluet modern berpadu bordir manual klasik",
    tag: "Haute Couture",
    link: "#koleksi",
    image: "/images/categories/kebaya.jpg"
  },
  {
    title: "Songket Palembang",
    subtitle: "Kemewahan wastra tenun asli berbenang emas",
    tag: "Heritage Luxe",
    link: "#koleksi",
    image: "/images/categories/songket.jpg"
  },
  {
    title: "Modest Luxury Gown",
    subtitle: "Gaun syar'i-friendly bernuansa runway modern",
    tag: "Ready-to-Wear",
    link: "#koleksi",
    image: "/images/categories/modest-gown.jpg"
  },
  {
    title: "Bespoke Bridal",
    subtitle: "Layanan fitting personal untuk hari istimewa",
    tag: "Made to Order",
    link: "#koleksi",
    image: "/images/categories/bridal.jpg"
  }
];

export const CategoryTiles: React.FC = () => {
  return (
    <section id="kategori" className="py-16 sm:py-20 bg-[#F9F9F9] border-b border-[#EEEEEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#E5E5E5]">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B38E5D] font-semibold">
              Kategori Kurasi
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#111111] font-semibold mt-1">
              Koleksi Pilihan Musim Ini
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#8E8E93] mt-2 sm:mt-0">
            Standar busana panggung peragaan busana & resepsi formal
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TILES.map((tile, idx) => (
            <a
              key={idx}
              href={tile.link}
              className="group relative overflow-hidden bg-white p-6 border border-[#EAEAEA] hover:border-[#111111] transition-all duration-300 flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <span className="inline-block text-[10px] uppercase tracking-widest font-semibold text-[#B38E5D] mb-3">
                  {tile.tag}
                </span>
                <h3 className="font-serif text-xl text-[#111111] font-semibold mb-2 group-hover:text-[#B38E5D] transition-colors">
                  {tile.title}
                </h3>
                <p className="text-xs text-[#666666] leading-relaxed">
                  {tile.subtitle}
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#111111] group-hover:text-[#B38E5D]">
                <span>Lihat Desain</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
