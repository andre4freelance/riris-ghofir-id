import React, { useState } from "react";
import { MessageCircle, X, Ruler, Check } from "lucide-react";
import { FashionProduct, BOUTIQUE_INFO } from "../data/catalog";
import { ImageWithFallback } from "./ImageWithFallback";

interface QuickViewModalProps {
  product: FashionProduct | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [activeImage, setActiveImage] = useState<string>("");

  React.useEffect(() => {
    if (product) {
      setActiveImage(product.image);
      setSelectedSize(product.sizes[0] || "");
    }
  }, [product]);

  if (!product) return null;

  const currentSize = selectedSize || product.sizes[0];
  const displayImage = activeImage || product.image;

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Halo Riris Ghofir Boutique, saya tertarik berkonsultasi mengenai koleksi "${product.name}" (${product.collection}) pilihan ukuran: ${currentSize}. Apakah busana ini bisa fitting di butik / pesan?`
    );
    window.open(`https://wa.me/${BOUTIQUE_INFO.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row border border-[#E5E5E5]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle btn-ghost absolute top-4 right-4 z-10 text-[#111111] hover:text-[#B38E5D] bg-white/90"
          aria-label="Tutup modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Column */}
        <div className="w-full md:w-1/2 bg-[#F9F9F9] flex flex-col">
          <div className="flex-1">
            <ImageWithFallback
              src={displayImage}
              alt={product.name}
              aspectRatio="aspect-[3/4]"
              badgeLabel={product.badge}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Multi-angle gallery thumbnails */}
          {product.gallery && product.gallery.length > 1 && (
            <div className="flex items-center gap-2 p-3 bg-white border-t border-[#EEEEEE] overflow-x-auto">
              <span className="text-[10px] uppercase font-semibold text-[#8E8E93] mr-1 shrink-0">
                Sudut:
              </span>
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-12 h-16 shrink-0 overflow-hidden border-2 transition-all cursor-pointer ${
                    displayImage === img
                      ? "border-[#111111] opacity-100 shadow-xs"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                  title={`Tampilan sudut ${idx + 1}`}
                >
                  <img src={img} alt={`Sudut ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details Column */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] uppercase tracking-widest text-[#B38E5D] font-semibold">
                {product.collection}
              </span>
              {product.badge && (
                <span className="badge badge-sm badge-neutral rounded-none text-[10px] uppercase tracking-wider bg-[#111111] text-white border-none">
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
                  <Ruler className="w-3.5 h-3.5" /> Panduan Ukuran & Custom
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`btn btn-sm rounded-none text-xs font-medium transition-colors ${
                      currentSize === sz
                        ? "btn-neutral bg-[#111111] text-white border-[#111111]"
                        : "btn-outline border-[#CCCCCC] text-[#111111] hover:border-[#111111] hover:bg-[#F5F5F5] hover:text-[#111111]"
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Button (Pure Landing Page Consultation) */}
          <div className="pt-4 border-t border-[#EEEEEE]">
            <button
              onClick={handleWhatsAppInquiry}
              className="btn btn-neutral w-full rounded-none tracking-widest uppercase text-xs font-semibold py-3.5 bg-[#111111] hover:bg-[#B38E5D] text-white border-none shadow-sm gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Konsultasi Fitting / Pesan via WhatsApp</span>
            </button>
            <p className="text-[11px] text-center text-[#8E8E93] mt-2">
              Kunjungi Butik Jl. Ngagel Jaya 96 Surabaya atau melayani konsultasi jarak jauh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
