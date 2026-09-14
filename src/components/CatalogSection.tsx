import React, { useState } from "react";
import { CATEGORIES, PRODUCTS, FashionProduct, BOUTIQUE_INFO } from "../data/catalog";
import { ImageWithFallback } from "./ImageWithFallback";
import { MessageCircle, Eye, Sparkles, SlidersHorizontal } from "lucide-react";

interface CatalogSectionProps {
  onQuickView: (product: FashionProduct) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({ onQuickView }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const handleWhatsAppDirect = (e: React.MouseEvent, product: FashionProduct) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `Halo Riris Ghofir Boutique, saya tertarik dengan koleksi "${product.name}" (${product.priceDisplay}). Apakah busana ini tersedia untuk fitting / konsultasi?`
    );
    window.open(`https://wa.me/${BOUTIQUE_INFO.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="koleksi" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B38E5D] font-semibold flex items-center justify-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Curated Runway & Atelier Collection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111] font-semibold mb-4">
            Eksplorasi Mahakarya Busana
          </h2>
          <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
            Setiap busana dirancang khusus dengan ketelitian bordir tangan manual, wastra tenun songket berkualitas tinggi, dan siluet kebaya modern yang memuliakan keanggunan wanita.
          </p>
        </div>

        {/* Category Filters using DaisyUI Tabs */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div role="tablist" className="tabs tabs-border">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                onClick={() => setActiveCategory(cat.slug)}
                className={`tab uppercase text-xs font-semibold tracking-wider whitespace-nowrap pb-3 ${
                  activeCategory === cat.slug
                    ? "tab-active border-[#111111] text-[#111111]"
                    : "text-[#666666] hover:text-[#111111]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Count & Filter Indicator */}
        <div className="flex items-center justify-between border-b border-[#EEEEEE] pb-4 mb-8 text-xs text-[#8E8E93]">
          <span className="tracking-wider uppercase">
            Menampilkan <strong className="text-[#111111]">{filteredProducts.length}</strong> Koleksi Pilihan
          </span>
          <div className="flex items-center gap-1.5 text-[#111111]">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#B38E5D]" />
            <span className="tracking-wider uppercase font-medium">Atelier Editorial Lookbook</span>
          </div>
        </div>

        {/* Product Grid (DaisyUI Card + Zalora Luxury Ratio) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onQuickView(product)}
              className="card group cursor-pointer flex flex-col bg-white rounded-none border border-transparent hover:border-[#EEEEEE] transition-all duration-300"
            >
              {/* Image Container with Badges */}
              <figure className="relative overflow-hidden bg-[#F9F9F9] mb-4 m-0 aspect-[3/4]">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  aspectRatio="aspect-[3/4]"
                  badgeLabel={product.badge}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Status Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="badge badge-sm badge-neutral rounded-none text-[10px] uppercase font-bold tracking-widest px-2.5 py-2 bg-[#111111] text-white border-none shadow-xs">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Multi-angle indicator pill */}
                {product.gallery && product.gallery.length > 1 && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="badge badge-xs bg-white/90 backdrop-blur-xs text-[#111111] font-semibold tracking-wider text-[9px] border-none shadow-2xs">
                      {product.gallery.length} Sudut
                    </span>
                  </div>
                )}

                {/* Hover Action Overlay (Quick View & WhatsApp) */}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between gap-2 z-20">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickView(product);
                    }}
                    className="btn btn-sm btn-light flex-1 bg-white hover:bg-white text-[#111111] text-[11px] font-semibold tracking-wider uppercase border-none rounded-none shadow-xs gap-1"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#111111]" />
                    <span>Detail Karya</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleWhatsAppDirect(e, product)}
                    className="btn btn-sm bg-[#25D366] hover:bg-[#20ba5a] text-white border-none rounded-none px-3 shadow-xs"
                    title="Konsultasi busana ini via WhatsApp"
                    aria-label="Konsultasi WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </figure>

              {/* Product Info */}
              <div className="card-body p-0 flex flex-col flex-1">
                <span className="text-[10px] uppercase tracking-widest text-[#B38E5D] font-semibold mb-1">
                  {product.collection}
                </span>

                <h3 className="font-serif text-lg font-medium text-[#111111] group-hover:text-[#B38E5D] transition-colors line-clamp-1 mb-1">
                  {product.name}
                </h3>

                <p className="text-xs text-[#666666] line-clamp-1 mb-2">
                  {product.material}
                </p>

                <div className="mt-auto pt-2 flex items-center justify-between border-t border-[#F0F0F0]">
                  <span className="text-sm font-semibold text-[#111111]">
                    {product.priceDisplay}
                  </span>
                  <span className="badge badge-sm badge-ghost rounded-none text-[10px] uppercase tracking-wider text-[#8E8E93]">
                    {product.sizes[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bespoke Atelier Assurance Card */}
        <div className="mt-16 p-8 bg-[#FAF8F5] border border-[#EAE3D5] text-center max-w-4xl mx-auto">
          <h3 className="font-serif text-xl sm:text-2xl text-[#111111] font-semibold mb-2">
            Mencari Model Spesial atau Ukuran Kustom?
          </h3>
          <p className="text-xs sm:text-sm text-[#666666] max-w-xl mx-auto mb-6 leading-relaxed">
            Atelier Riris Ghofir di Surabaya melayani pembuatan kebaya wisuda, seragam keluarga, gaun pesta, dan busana akad custom bespoke dengan pengukuran badan langsung.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${BOUTIQUE_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Halo Riris Ghofir Boutique, saya ingin konsultasi pembuatan kebaya / gaun pesta custom bespoke."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-neutral rounded-none text-xs font-semibold uppercase tracking-widest px-6 py-3 bg-[#111111] hover:bg-[#B38E5D] text-white border-none gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Konsultasi Desain Kustom</span>
            </a>

            <a
              href="#butik"
              className="btn btn-outline rounded-none text-xs font-semibold uppercase tracking-widest px-6 py-3 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white"
            >
              Jadwalkan Fitting Butik
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
