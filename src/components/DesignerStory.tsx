import React from "react";
import { Award, Palette, Scissors } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

export const DesignerStory: React.FC = () => {
  return (
    <section id="desainer" className="py-16 sm:py-24 lg:py-28 bg-[#111111] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Story */}
          <div className="lg:col-span-7">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#B38E5D] font-semibold block mb-3">
              Filosofi Perancang & Karya Seni
            </span>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 leading-tight">
              Sentuhan Mahakarya Riris Ghofir: Dari Jawa Timur ke Pentas Nasional
            </h2>

            <p className="text-sm sm:text-base text-[#CCCCCC] leading-relaxed mb-4 sm:mb-6 font-light">
              Berawal dari kecintaan mendalam pada keindahan kain tradisional Nusantara dan detail bordir manual, <strong>Riris Ghofir</strong> menghidupkan kembali karakter wastra daerah menjadi busana muslim berkelas haute-couture.
            </p>

            <p className="text-sm sm:text-base text-[#AAAAAA] leading-relaxed mb-8 font-light">
              Koleksinya secara konsisten memadukan siluet kontemporer dengan sentuhan pengaruh estetika internasional yang elegan dan subtle, tanpa meninggalkan nilai kesantunan busana muslimah serta keluhuran budaya Indonesia.
            </p>

            {/* 3 Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/15">
              <div className="flex flex-col">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#B38E5D] mb-3">
                  <Scissors className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-semibold text-white mb-1">
                  Manual Embroidery
                </h4>
                <p className="text-xs text-[#888888] leading-relaxed">
                  Bordir manual tangan dengan tingkat presisi helai benang tinggi.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#B38E5D] mb-3">
                  <Palette className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-semibold text-white mb-1">
                  Authentic Wastra
                </h4>
                <p className="text-xs text-[#888888] leading-relaxed">
                  Songket dan tenun pilihan langsung dari perajin daerah pilihan.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#B38E5D] mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-semibold text-white mb-1">
                  Runway Excellence
                </h4>
                <p className="text-xs text-[#888888] leading-relaxed">
                  Tampil resmi di ajang Indonesia Fashion Aesthetic (IFA) 2026.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Card with Designer Photo & Quote */}
          <div className="lg:col-span-5 mt-6 lg:mt-0">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Designer Portrait */}
              <div className="relative aspect-[3/4] overflow-hidden bg-white/10 border border-white/20 mb-6 shadow-2xl">
                <ImageWithFallback
                  src="/images/designer/designer-riris-ghofir.jpg"
                  alt="Desainer Riris Ghofir"
                  aspectRatio="aspect-[3/4]"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-5 sm:p-6">
                  <div className="text-lg sm:text-xl font-serif font-bold text-white">
                    Riris Ghofir
                  </div>
                  <div className="text-xs text-[#B38E5D] uppercase tracking-widest mt-0.5 font-medium">
                    Founder & Principal Fashion Designer
                  </div>
                </div>
              </div>

              {/* Quote Box */}
              <div className="p-5 sm:p-6 bg-white/5 border border-white/10 relative backdrop-blur-xs">
                <blockquote className="font-serif text-sm sm:text-base md:text-lg text-white/90 italic leading-relaxed mb-3">
                  "Busana muslim bukan sekadar penutup raga, melainkan representasi keanggunan budi pekerti dan penghargaan tertinggi pada warisan leluhur kita."
                </blockquote>
                <div className="text-right text-[10px] sm:text-[11px] text-[#B38E5D] uppercase tracking-wider font-semibold">
                  Atelier Surabaya • Jl. Ngagel Jaya 96
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
