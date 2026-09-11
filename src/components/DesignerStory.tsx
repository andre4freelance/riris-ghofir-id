import React from "react";
import { Sparkles, Award, Palette, Scissors } from "lucide-react";

export const DesignerStory: React.FC = () => {
  return (
    <section id="desainer" className="py-20 sm:py-28 bg-[#111111] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Story */}
          <div className="lg:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B38E5D] font-semibold flex items-center gap-1.5 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Filosofi Perancang & Karya Seni
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
              Sentuhan Mahakarya Riris Ghofir: Dari Jawa Timur ke Pentas Nasional
            </h2>

            <p className="text-sm sm:text-base text-[#AAAAAA] leading-relaxed mb-6 font-light">
              Berawal dari kecintaan mendalam pada keindahan kain tradisional Nusantara dan detail bordir manual, <strong>Riris Ghofir</strong> menghidupkan kembali karakter wastra daerah menjadi busana muslim berkelas haute-couture.
            </p>

            <p className="text-sm sm:text-base text-[#AAAAAA] leading-relaxed mb-8 font-light">
              Koleksinya secara konsisten memadukan siluet kontemporer dengan sentuhan pengaruh estetika Eropa dan Korea yang subtle, tanpa meninggalkan nilai kesantunan busana modest wear serta keluhuran budaya Indonesia.
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

          {/* Right Visual Quote Card */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 bg-white/5 border border-white/10 relative backdrop-blur-xs">
              <span className="font-serif text-6xl text-[#B38E5D] absolute top-4 left-6 opacity-30">“</span>
              <blockquote className="font-serif text-xl sm:text-2xl text-white italic leading-relaxed pt-6 mb-6">
                Busana muslim bukan sekadar penutup raga, melainkan representasi keanggunan budi pekerti dan penghargaan tertinggi pada warisan leluhur kita.
              </blockquote>
              <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-white uppercase tracking-wider">
                    Riris Ghofir
                  </div>
                  <div className="text-xs text-[#B38E5D] tracking-widest uppercase mt-0.5">
                    Fashion Designer & Founder
                  </div>
                </div>
                <div className="text-right text-[11px] text-[#888888] uppercase tracking-wider">
                  Surabaya Atelier
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
