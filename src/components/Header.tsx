import React, { useState } from "react";
import { MessageCircle, Menu, X, Instagram, MapPin, Calendar } from "lucide-react";
import { BOUTIQUE_INFO } from "../data/catalog";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EEEEEE] transition-all">
      {/* Top Announcement Bar (Zalora Editorial Bar) */}
      <div className="bg-[#111111] text-white text-[11px] py-2 px-4 text-center tracking-widest uppercase font-medium flex items-center justify-center gap-3">
        <span className="hidden md:inline">Atelier & Modest Wear Showcase</span>
        <span className="hidden md:inline text-[#B38E5D]">•</span>
        <span>Butik Fisik: Jl. Ngagel Jaya No. 96 Surabaya</span>
        <span className="text-[#B38E5D]">•</span>
        <a
          href={BOUTIQUE_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B38E5D] hover:underline inline-flex items-center gap-1 font-semibold"
        >
          <Instagram className="w-3 h-3" /> @ririsghofir.official
        </a>
      </div>

      {/* Main DaisyUI Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="navbar min-h-20 p-0 justify-between">
          {/* Navbar Start: Mobile Menu Toggle & Left Navigation */}
          <div className="navbar-start w-auto lg:w-1/3">
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="btn btn-ghost btn-circle text-[#111111]"
                aria-label="Buka Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-widest text-[#111111]">
              <a href="#koleksi" className="hover:text-[#B38E5D] transition-colors">
                Koleksi
              </a>
              <a href="#kategori" className="hover:text-[#B38E5D] transition-colors">
                Kategori
              </a>
              <a href="#desainer" className="hover:text-[#B38E5D] transition-colors">
                Kiprah Desainer
              </a>
              <a href="#layanan" className="hover:text-[#B38E5D] transition-colors">
                Alur Fitting
              </a>
              <a href="#butik" className="hover:text-[#B38E5D] transition-colors">
                Lokasi
              </a>
            </nav>
          </div>

          {/* Navbar Center: Brand Typography Logo */}
          <div className="navbar-center">
            <a href="#" className="flex flex-col items-center group py-2">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.22em] text-[#111111] group-hover:text-[#B38E5D] transition-colors">
                RIRIS GHOFIR
              </span>
              <span className="text-[9px] uppercase tracking-[0.38em] text-[#8E8E93] font-medium mt-0.5">
                Surabaya • Indonesia
              </span>
            </a>
          </div>

          {/* Navbar End: Direct WhatsApp & Fitting Reservation CTA (Landing Page Oriented) */}
          <div className="navbar-end w-auto lg:w-1/3 justify-end gap-3 sm:gap-4">
            <a
              href="#butik"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#666666] hover:text-[#111111] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#B38E5D]" />
              <span>Butik Surabaya</span>
            </a>

            <a
              href={`https://wa.me/${BOUTIQUE_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Halo Riris Ghofir Boutique, saya melihat landing page showcase dan ingin konsultasi fitting kebaya / busana pesta."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-neutral btn-sm rounded-none tracking-widest uppercase text-xs font-medium px-4 sm:px-5 bg-[#111111] hover:bg-[#B38E5D] text-white border-none shadow-sm gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5 text-white" />
              <span className="hidden sm:inline">WhatsApp Stylist</span>
              <span className="sm:hidden">Stylist</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EEEEEE] bg-white px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-4 text-sm font-medium uppercase tracking-wider text-[#111111]">
            <a
              href="#koleksi"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#B38E5D] py-2 border-b border-[#F5F5F5] flex justify-between items-center"
            >
              <span>Koleksi Busana</span>
              <span className="badge badge-sm badge-outline text-[10px]">Couture</span>
            </a>
            <a
              href="#kategori"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#B38E5D] py-2 border-b border-[#F5F5F5]"
            >
              Kategori Pilihan
            </a>
            <a
              href="#desainer"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#B38E5D] py-2 border-b border-[#F5F5F5]"
            >
              Kiprah Desainer Riris Ghofir
            </a>
            <a
              href="#layanan"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#B38E5D] py-2 border-b border-[#F5F5F5]"
            >
              Layanan Fitting & Kustom
            </a>
            <a
              href="#butik"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#B38E5D] py-2 border-b border-[#F5F5F5] flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#B38E5D]" />
              <span>Lokasi Butik Surabaya</span>
            </a>
          </nav>

          <div className="pt-2">
            <a
              href={`https://wa.me/${BOUTIQUE_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Halo Riris Ghofir Boutique, saya ingin reservasi jadwal konsultasi busana."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-neutral w-full rounded-none tracking-widest uppercase text-xs bg-[#111111] text-white hover:bg-[#B38E5D] border-none"
            >
              <Calendar className="w-4 h-4" /> Reservasi Fitting via WA
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
