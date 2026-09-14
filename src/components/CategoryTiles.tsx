import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

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
    subtitle: "Siluet kebaya modern santun berpadu bordir manual halus khas Jawa Timur",
    tag: "Haute Couture",
    link: "#koleksi",
    image: "/images/categories/kebaya.jpg"
  },
  {
    title: "Tunic & Modest Wear",
    subtitle: "Tunik beraksen mutiara dan bordir geometris kontemporer ramah hijab",
    tag: "Ready-to-Wear",
    link: "#koleksi",
    image: "/images/categories/tunic.jpg"
  },
  {
    title: "Boutique Modest Set",
    subtitle: "Busana pesta muslimah bernuansa lembut untuk wisuda, lamaran, dan resepsi",
    tag: "Signature Pieces",
    link: "#koleksi",
    image: "/images/categories/modest-gown.jpg"
  }
];

export const CategoryTiles: React.FC = () => {
  return (
    <section id="kategori" className="py-12 sm:py-16 lg:py-20 bg-[#F9F9F9] border-b border-[#EEEEEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 pb-4 border-b border-[#E5E5E5]">
          <div>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#B38E5D] font-semibold">
              Kategori Kurasi
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#111111] font-semibold mt-1">
              Koleksi Pilihan Musim Ini
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#8E8E93] mt-2 sm:mt-0">
            Katalog busana panggung peragaan busana & acara formal
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TILES.map((tile, idx) => (
            <a
              key={idx}
              href={tile.link}
              className="card group relative overflow-hidden bg-white border border-[#EAEAEA] hover:border-[#111111] transition-all duration-300 rounded-none shadow-xs hover:shadow-md"
            >
              <figure className="relative aspect-[4/3] overflow-hidden bg-[#EEEEEE] m-0">
                <ImageWithFallback
                  src={tile.image}
                  alt={tile.title}
                  aspectRatio="aspect-[4/3]"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="badge badge-sm badge-neutral rounded-none text-[10px] uppercase tracking-widest font-semibold bg-[#111111] text-white border-none">
                    {tile.tag}
                  </span>
                </div>
              </figure>

              <div className="card-body p-4 sm:p-5 justify-between">
                <div>
                  <h3 className="card-title font-serif text-lg sm:text-xl text-[#111111] font-semibold mb-1 group-hover:text-[#B38E5D] transition-colors">
                    {tile.title}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {tile.subtitle}
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#111111] group-hover:text-[#B38E5D] border-t border-[#F0F0F0] mt-2">
                  <span>Lihat Busana</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
