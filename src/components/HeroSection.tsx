import React from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { BOUTIQUE_INFO } from "../data/catalog";
import { ImageWithFallback } from "./ImageWithFallback";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#FAF8F5] border-b border-[#EEEEEE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="inline-flex items-center px-3 py-1 bg-white border border-[#E5E5E5] text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-[#B38E5D] mb-4 sm:mb-6 self-start shadow-xs">
              Indonesia Fashion Aesthetic 2026 Runway Designer
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#111111] font-semibold tracking-tight leading-[1.18] sm:leading-[1.15] mb-4 sm:mb-6">
              Kemewahan Modest Wear & Keanggunan Wastra Nusantara
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#555555] leading-relaxed max-w-xl mb-6 sm:mb-8 font-light">
              Karya adibusana desainer <strong>Riris Ghofir</strong>. Memadukan siluet kebaya modern yang santun, kemegahan wastra tenun, serta kehalusan bordir manual tangan berstandar runway.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#koleksi"
                className="btn btn-neutral rounded-none w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#111111] hover:bg-[#B38E5D] text-white text-xs font-semibold tracking-widest uppercase text-center transition-all duration-300 border-none shadow-sm gap-2"
              >
                <span>Jelajahi Koleksi</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${BOUTIQUE_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Halo Riris Ghofir Boutique, saya ingin reservasi jadwal fitting kebaya / konsultasi busana di butik Surabaya."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline rounded-none w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white hover:bg-[#111111] hover:text-white text-[#111111] border-[#111111] text-xs font-semibold tracking-widest uppercase text-center transition-colors gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reservasi Fitting Butik</span>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-8 sm:pt-10 mt-8 sm:mt-10 border-t border-[#E5E5E5]">
              <div>
                <div className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111]">19K+</div>
                <div className="text-[9px] sm:text-[11px] uppercase tracking-wider text-[#8E8E93] mt-1 font-medium leading-tight">
                  Pengikut Media Sosial
                </div>
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111]">100%</div>
                <div className="text-[9px] sm:text-[11px] uppercase tracking-wider text-[#8E8E93] mt-1 font-medium leading-tight">
                  Artisanal Handcraft
                </div>
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111]">Surabaya</div>
                <div className="text-[9px] sm:text-[11px] uppercase tracking-wider text-[#8E8E93] mt-1 font-medium leading-tight">
                  Atelier & Butik Fisik
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Column (Editorial Lookbook Card) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Back Accent Card */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-[#B38E5D]/20 to-transparent transform -rotate-1 rounded-none -z-10 border border-[#B38E5D]/30" />

              {/* Main Editorial Card */}
              <div className="card bg-white p-3 sm:p-4 shadow-xl border border-[#EEEEEE] rounded-none">
                <div className="relative aspect-[3/4] bg-[#111111] overflow-hidden group">
                  <ImageWithFallback
                    src="/images/hero/hero-runway-emerald.jpg"
                    alt="Signature Runway Series - Indonesia Fashion Aesthetic"
                    aspectRatio="aspect-[3/4]"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-4 sm:p-6 text-left">
                    <span className="badge badge-warning text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold text-white bg-[#B38E5D] border-none mb-1.5 sm:mb-2 self-start rounded-none">
                      IFA Runway Series
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
                      Royal Emerald Couture
                    </h3>
                    <p className="text-xs text-white/80 line-clamp-2">
                      Karya adibusana kebaya modern yang memukau di panggung peragaan busana Indonesia Fashion Aesthetic.
                    </p>
                  </div>
                </div>

                <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 flex items-center justify-between text-xs text-[#8E8E93]">
                  <span className="uppercase tracking-widest font-medium text-[10px] sm:text-xs">Butik Jl. Ngagel Jaya 96</span>
                  <span className="font-serif italic text-[#111111] text-[11px] sm:text-xs">Koleksi 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
