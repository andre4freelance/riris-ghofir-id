import React, { useState } from "react";
import { MessageCircle, X, Ruler, Sparkles, Check } from "lucide-react";
import { FashionProduct, BOUTIQUE_INFO } from "../data/catalog";
import { ImageWithFallback } from "./ImageWithFallback";

interface QuickViewModalProps {
  product: FashionProduct | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState<string>("");

  if (!product) return null;

  const currentSize = selectedSize || product.sizes[0];

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Halo Riris Ghofir Boutique, saya tertarik memesan koleksi "${product.name}" (${product.collection}) dengan ukuran: ${currentSize}. Apakah masih tersedia / bisa reservasi fitting?`
    );
    window.open(`https://wa.me/${BOUTIQUE_INFO.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row border border-[#E5E5E5]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-[#111111] hover:text-[#B38E5D] bg-white/90 rounded-full transition-colors"
          aria-label="Tutup modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Product Image Column */}
        <div className="w-full md:w-1/2 bg-[#F9F9F9]">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            aspectRatio="aspect-[3/4]"
            badgeLabel={product.badge}
            className="w-full h-full"
          />
        </div>

        {/* Product Details Column */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] uppercase tracking-widest text-[#B38E5D] font-semibold">
                {product.collection}
              </span>
              {product.badge && (
                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#111111] text-white">
                  {product.badge}
                </span>
              )}
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#111111] font-semibold mb-2">
              {product.name}
            </h3>

            <p className="text-lg font-medium text-[#111111] mb-4 pb-4 border-b border-[#EEEEEE]">
              {product.priceDisplay}
            </p>

            <div className="mb-5">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8E8E93] mb-1.5">
                Material & Pengerjaan
              </h4>
              <p className="text-sm text-[#444444] leading-relaxed">
                {product.material}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8E8E93] mb-1.5">
                Deskripsi Busana
              </h4>
              <p className="text-sm text-[#555555] leading-relaxed mb-3">
                {product.description}
              </p>

              <div className="space-y-1.5 pt-2">
                {product.details.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#444444]">
                    <Check className="w-3.5 h-3.5 text-[#B38E5D] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#111111]">
                  Pilihan Ukuran:
                </span>
                <span className="text-xs text-[#8E8E93] flex items-center gap-1">
                  <Ruler className="w-3.5 h-3.5" /> Size Guide
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`px-3 py-1.5 text-xs font-medium border transition-colors ${
                      currentSize === sz
                        ? "bg-[#111111] text-white border-[#111111]"
                        : "bg-white text-[#111111] border-[#CCCCCC] hover:border-[#111111]"
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4 border-t border-[#EEEEEE]">
            <button
              onClick={handleWhatsAppInquiry}
              className="w-full py-3.5 px-6 bg-[#111111] hover:bg-[#B38E5D] text-white font-medium text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Pesan / Konsultasi Fitting via WhatsApp
            </button>
            <p className="text-[11px] text-center text-[#8E8E93] mt-2">
              Melayani pengiriman seluruh Indonesia & reservasi fitting butik Surabaya
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
