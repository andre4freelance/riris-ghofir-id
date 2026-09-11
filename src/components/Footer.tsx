import React from "react";
import { Instagram, Facebook, MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { BOUTIQUE_INFO } from "../data/catalog";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.2em] block mb-2">
              RIRIS GHOFIR
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B38E5D] font-medium block mb-4">
              Atelier & Luxury Modest Fashion • Surabaya
            </span>
            <p className="text-xs text-[#888888] leading-relaxed max-w-sm mb-6">
              Mendedikasikan keindahan busana muslimah elegan, kebaya couture modern, dan wastra tenun songket Nusantara ke panggung mode nasional dan internasional.
            </p>

            <div className="flex items-center gap-4">
              <a
                href={BOUTIQUE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#B38E5D] flex items-center justify-center text-white transition-colors"
                aria-label="Instagram Riris Ghofir"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BOUTIQUE_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#B38E5D] flex items-center justify-center text-white transition-colors"
                aria-label="Facebook Riris Ghofir"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#B38E5D] mb-4">
              Navigasi Koleksi
            </h4>
            <ul className="space-y-2.5 text-xs text-[#AAAAAA]">
              <li>
                <a href="#koleksi" className="hover:text-white transition-colors">
                  Signature Kebaya Modern
                </a>
              </li>
              <li>
                <a href="#koleksi" className="hover:text-white transition-colors">
                  Songket Palembang Couture
                </a>
              </li>
              <li>
                <a href="#koleksi" className="hover:text-white transition-colors">
                  Luxury Modest Gown Sets
                </a>
              </li>
              <li>
                <a href="#koleksi" className="hover:text-white transition-colors">
                  Embroidered Tunics & Outer
                </a>
              </li>
              <li>
                <a href="#koleksi" className="hover:text-white transition-colors">
                  Bespoke Bridal & Custom Fitting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#B38E5D] mb-4">
              Butik Resmi Surabaya
            </h4>
            <div className="space-y-3 text-xs text-[#888888]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B38E5D] shrink-0 mt-0.5" />
                <span>{BOUTIQUE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B38E5D] shrink-0" />
                <span>WhatsApp: {BOUTIQUE_INFO.whatsappDisplay}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B38E5D] shrink-0" />
                <span>Instagram: {BOUTIQUE_INFO.instagram}</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white/5 border border-white/10 text-[11px] text-[#999999]">
              Jam Buka: <span className="text-white font-medium">09.00 – 18.00 WIB</span> (Senin – Sabtu)
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#666666]">
          <p>© 2026 Riris Ghofir Boutique. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <span className="text-[10px] tracking-wider uppercase text-[#444444]">
              High-Converting Digital Showcase Mockup
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-white/5 hover:bg-[#B38E5D] text-white transition-colors rounded-none flex items-center gap-1 text-[11px] uppercase tracking-wider"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="w-3.5 h-3.5" /> Atas
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
