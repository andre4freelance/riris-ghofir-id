import React, { useState } from "react";
import { CATEGORIES, PRODUCTS, FashionProduct, BOUTIQUE_INFO } from "../data/catalog";
import { ImageWithFallback } from "./ImageWithFallback";
import { MessageCircle, Eye, SlidersHorizontal, Sparkles } from "lucide-react";

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
      `Halo Riris Ghofir Boutique, saya ingin tanya ketersediaan busana "${product.name}" (${product.priceDisplay}). Apakah bisa pesan / fitting?`
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

        {/* Category Filters (Zalora Style Tabs) */}
        <div className="flex items-center justify-center mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1 bg-[#F5F5F5] rounded-none border border-[#EEEEEE]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-4 sm:px-6 py-2 text-xs font-medium tracking-wider uppercase whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat.slug
                    ? "bg-[#111111] text-white shadow-xs"
                    : "text-[#666666] hover:text-[#111111] hover:bg-[#EAEAEA]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Count & Sort Indicator */}
        <div className="flex items-center justify-between border-b border-[#EEEEEE] pb-4 mb-8 text-xs text-[#8E8E93]">
          <span className="tracking-wider uppercase">
            Menampilkan <strong className="text-[#111111]">{filteredProducts.length}</strong> Koleksi Eksklusif
          </span>
          <div className="flex items-center gap-1.5 cursor-pointer hover:text-[#111111]">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="tracking-wider uppercase">Atelier Catalog Filter</span>
          </div>
        </div>

        {/* Product Grid (Zalora Product Card) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onQuickView(product)}
              className="group cursor-pointer flex flex-col bg-white"
            >
              {/* Image Container with Badges */}
              <div className="relative overflow-hidden bg-[#F9F9F9] mb-4">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  aspectRatio="aspect-[3/4]"
                  badgeLabel={product.badge}
                  className="w-full"
                />

                {/* Status Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-[#111111] text-white">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Hover Action Drawer (Zalora Quick Action) */}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickView(product);
                    }}
                    className="flex-1 py-2 bg-white/95 hover:bg-white text-[#111111] text-[11px] font-semibold tracking-wider uppercase flex items-center justify-center gap-1 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" /> Quick View
                  </button>
                  <button
                    onClick={(e) => handleWhatsAppDirect(e, product)}
                    className="p-2 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-none transition-colors"
                    title="Tanya ketersediaan via WA"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-1">
                <span className="text-[11px] uppercase tracking-widest text-[#B38E5D] font-semibold mb-1">
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
                  <span className="text-[10px] uppercase tracking-wider text-[#8E8E93]">
                    {product.sizes[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Runway Assurance */}
        <div className="mt-16 p-8 bg-[#FAF8F5] border border-[#EAE3D5] text-center max-w-4xl mx-auto">
          <h4 className="font-serif text-xl sm:text-2xl text-[#111111] font-semibold mb-2">
            Mencari Model Spesial atau Ukuran Kustom?
          </h4>
          <p className="text-xs sm:text-sm text-[#666666] max-w-2xl mx-auto mb-5 leading-relaxed">
            Butik Riris Ghofir melayani pembuatan busana pengantin (*bridal*), kebaya wisuda custom fit, serta seragam keluarga bernuansa songket eksklusif langsung dari butik kami di Surabaya.
          </p>
          <a
            href={`https://wa.me/${BOUTIQUE_INFO.whatsappNumber}?text=${encodeURIComponent(
              "Halo Riris Ghofir, saya ingin konsultasi pembuatan kebaya/busana custom made to order."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] hover:bg-[#B38E5D] text-white text-xs font-semibold tracking-widest uppercase transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> Konsultasi Custom Bespoke
          </a>
        </div>
      </div>
    </section>
  );
};
