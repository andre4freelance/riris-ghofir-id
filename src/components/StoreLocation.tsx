import React from "react";
import { MapPin, Clock, MessageCircle, Navigation, Phone } from "lucide-react";
import { BOUTIQUE_INFO } from "../data/catalog";

export const StoreLocation: React.FC = () => {
  return (
    <section id="butik" className="py-16 sm:py-24 bg-white border-t border-[#EEEEEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B38E5D] font-semibold">
              Kunjungan Butik & Fitting Langsung
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111111] font-semibold mt-2 mb-6">
              Atelier Riris Ghofir Surabaya
            </h2>

            <p className="text-sm sm:text-base text-[#666666] leading-relaxed mb-8">
              Rasakan langsung kelembutan kain sutra, detail kilau payet kristal, dan kesempurnaan fitting busana Anda di butik resmi kami yang berlokasi strategis di pusat kota Surabaya.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#EAE3D5] flex items-center justify-center text-[#B38E5D] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#111111] mb-1">
                    Alamat Butik Fisik
                  </h4>
                  <p className="text-sm text-[#444444] leading-relaxed">
                    {BOUTIQUE_INFO.address}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#EAE3D5] flex items-center justify-center text-[#B38E5D] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#111111] mb-1">
                    Jam Operasional & Fitting
                  </h4>
                  <p className="text-sm text-[#444444] leading-relaxed">
                    {BOUTIQUE_INFO.openingHours}
                  </p>
                  <p className="text-xs text-[#8E8E93] mt-0.5">
                    *Disarankan reservasi jadwal terlebih dahulu untuk fitting kebaya pengantin/bespoke
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#EAE3D5] flex items-center justify-center text-[#B38E5D] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#111111] mb-1">
                    Layanan WhatsApp & Pemesanan
                  </h4>
                  <p className="text-sm text-[#444444] leading-relaxed">
                    WhatsApp Concierge: <span className="font-semibold text-[#111111]">{BOUTIQUE_INFO.whatsappDisplay}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#EEEEEE] flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={`https://wa.me/${BOUTIQUE_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Halo Riris Ghofir Boutique, saya ingin reservasi jadwal fitting kebaya di butik Jl. Ngagel Jaya Surabaya."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-neutral rounded-none text-xs font-semibold tracking-widest uppercase px-6 py-3.5 bg-[#111111] hover:bg-[#B38E5D] text-white border-none gap-2 shadow-xs w-full sm:w-auto text-center justify-center"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Reservasi Fitting via WA</span>
              </a>

              <a
                href="https://maps.google.com/?q=Jl.+Ngagel+Jaya+No.+96+Surabaya"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline rounded-none text-xs font-semibold tracking-widest uppercase px-6 py-3.5 border-[#CCCCCC] hover:border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white gap-2 w-full sm:w-auto text-center justify-center"
              >
                <Navigation className="w-4 h-4" />
                <span>Petunjuk Arah Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Map Embed Column */}
          <div className="lg:col-span-6">
            <div className="card p-3 bg-[#F9F9F9] border border-[#E5E5E5] shadow-sm rounded-none">
              <div className="relative w-full aspect-[4/3] bg-[#EFEFEF] overflow-hidden">
                <iframe
                  title="Peta Lokasi Riris Ghofir Boutique Surabaya"
                  src={BOUTIQUE_INFO.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="mt-3 px-2 flex items-center justify-between text-xs text-[#8E8E93]">
                <span>Jl. Ngagel Jaya No. 96, Surabaya</span>
                <span className="text-[#B38E5D] font-medium">Boutique & Atelier</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
