import React, { useState } from "react";
import { CATEGORIES, PRODUCTS, FashionProduct, BOUTIQUE_INFO } from "../data/catalog";
import { ImageWithFallback } from "./ImageWithFallback";
import { MessageCircle, Eye, SlidersHorizontal } from "lucide-react";

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
    <section id="koleksi" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header without AI logo */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#B38E5D] font-semibold block mb-2">
            Curated Runway & Atelier Collection
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#111111] font-semibold mb-3 sm:mb-4">
            Eksplorasi Mahakarya Busana
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#666666] leading-relaxed">
            Setiap busana dirancang khusus dengan ketelitian bordir tangan manual, wastra nusantara pilihan, dan siluet kebaya modern yang memuliakan kesantunan serta keanggunan wanita.
          </p>
        </div>

        {/* Category Filters using DaisyUI Tabs (Responsive scroll on mobile) */}
        <div className="flex items-center justify-center mb-8 sm:mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div role="tablist" className="tabs tabs-border max-w-full">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                onClick={() => setActiveCategory(cat.slug)}
                className={`tab uppercase text-[11px] sm:text-xs font-semibold tracking-wider whitespace-nowrap pb-2 sm:pb-3 ${
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
        <div className="flex items-center justify-between border-b border-[#EEEEEE] pb-3 sm:pb-4 mb-6 sm:mb-8 text-xs text-[#8E8E93]">
          <span className="tracking-wider uppercase text-[11px] sm:text-xs">
            Menampilkan <strong className="text-[#111111]">{filteredProducts.length}</strong> Koleksi Eksklusif
          </span>
          <div className="flex items-center gap-1.5 text-[#111111]">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#B38E5D]" />
            <span className="tracking-wider uppercase font-medium text-[10px] sm:text-xs">Atelier Editorial Lookbook</span>
          </div>
        </div>

        {/* Product Grid (Responsive: 1 col on mobile, 2 cols on tablet, 3 cols on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onQuickView(product)}
              className="card group cursor-pointer flex flex-col bg-white rounded-none border border-[#EEEEEE] hover:border-[#111111] transition-all duration-300 shadow-xs hover:shadow-md"
            >
              {/* Image Container with Badges */}
              <figure className="relative overflow-hidden bg-[#F9F9F9] m-0 aspect-[3/4]">
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
                    <span className="badge badge-xs bg-white/95 text-[#111111] font-semibold tracking-wider text-[9px] border border-[#EEEEEE] shadow-2xs">
                      {product.gallery.length} Sudut Foto
                    </span>
                  </div>
                )}

                {/* Quick Action Overlay on Desktop & Mobile */}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between gap-2 z-20">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickView(product);
                    }}
                    className="btn btn-sm btn-light flex-1 bg-white hover:bg-white text-[#111111] text-[11px] font-semibold tracking-wider uppercase border-none rounded-none shadow-xs gap-1"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#111111]" />
                    <span>Detail Busana</span>
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
              <div className="card-body p-4 sm:p-5 flex flex-col flex-1">
                <span className="text-[10px] uppercase tracking-widest text-[#B38E5D] font-semibold mb-1">
                  {product.collection}
                </span>

                <h3 className="font-serif text-lg sm:text-xl font-medium text-[#111111] group-hover:text-[#B38E5D] transition-colors line-clamp-1 mb-1">
                  {product.name}
                </h3>

                <p className="text-xs text-[#666666] line-clamp-2 mb-3">
                  {product.material}
                </p>

                <div className="mt-auto pt-3 flex items-center justify-between border-t border-[#F0F0F0]">
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
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-[#FAF8F5] border border-[#EAE3D5] text-center max-w-4xl mx-auto">
          <h3 className="font-serif text-xl sm:text-2xl text-[#111111] font-semibold mb-2">
            Mencari Model Spesial atau Ukuran Kustom?
          </h3>
          <p className="text-xs sm:text-sm text-[#666666] max-w-xl mx-auto mb-6 leading-relaxed">
            Atelier Riris Ghofir di Surabaya melayani pembuatan kebaya wisuda, seragam keluarga, gaun pesta, dan busana akad custom bespoke dengan pengukuran badan langsung di butik kami.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a
              href={`https://wa.me/${BOUTIQUE_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Halo Riris Ghofir Boutique, saya ingin konsultasi pembuatan kebaya / gaun pesta custom bespoke."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-neutral rounded-none text-xs font-semibold uppercase tracking-widest px-6 py-3.5 bg-[#111111] hover:bg-[#B38E5D] text-white border-none gap-2 shadow-xs w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Konsultasi Desain Kustom</span>
            </a>

            <a
              href="#butik"
              className="btn btn-outline rounded-none text-xs font-semibold uppercase tracking-widest px-6 py-3.5 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white w-full sm:w-auto"
            >
              Jadwalkan Fitting Butik
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
