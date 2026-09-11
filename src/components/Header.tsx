import React from "react";
import { MessageCircle, Search, Menu, X, Instagram, Heart } from "lucide-react";
import { BOUTIQUE_INFO } from "../data/catalog";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EEEEEE] transition-all">
      {/* Top Announcement Bar (Zalora Style) */}
      <div className="bg-[#111111] text-white text-[11px] py-2 px-4 text-center tracking-widest uppercase font-medium flex items-center justify-center gap-3">
        <span>Koleksi Kebaya & Luxury Modest Wear Eksklusif</span>
        <span className="hidden sm:inline text-[#B38E5D]">•</span>
        <span className="hidden sm:inline">Kunjungi Butik Jl. Ngagel Jaya No. 96 Surabaya</span>
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

      {/* Main Nav Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-[#111111]">
            <a href="#koleksi" className="hover:text-[#B38E5D] transition-colors">
              Koleksi
            </a>
            <a href="#kategori" className="hover:text-[#B38E5D] transition-colors">
              Kategori
            </a>
            <a href="#desainer" className="hover:text-[#B38E5D] transition-colors">
              Tentang Desainer
            </a>
            <a href="#butik" className="hover:text-[#B38E5D] transition-colors">
              Lokasi Butik
            </a>
          </nav>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111111] hover:text-[#B38E5D]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Center: Brand Typography Logo */}
          <div className="flex flex-col items-center justify-center text-center">
            <a href="#" className="flex flex-col items-center">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.2em] text-[#111111]">
                RIRIS GHOFIR
              </span>
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#8E8E93] font-medium mt-0.5">
                Surabaya • Indonesia
              </span>
            </a>
          </div>

          {/* Right: Actions (Search, Wishlist, WhatsApp CTA) */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden sm:flex items-center text-[#8E8E93] hover:text-[#111111] cursor-pointer">
              <Search className="w-4 h-4" />
            </div>
            <div className="hidden sm:flex items-center text-[#8E8E93] hover:text-[#111111] cursor-pointer relative">
              <Heart className="w-4 h-4" />
              <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#B38E5D] text-white rounded-full text-[9px] font-bold flex items-center justify-center">
                0
              </span>
            </div>

            <a
              href={`https://wa.me/${BOUTIQUE_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Halo Riris Ghofir Boutique, saya ingin konsultasi busana kebaya / modest wear."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-[#111111] hover:bg-[#B38E5D] text-white text-xs font-medium tracking-widest uppercase transition-colors duration-200"
            >
              <MessageCircle className="w-3.5 h-3.5 text-white" />
              <span className="hidden sm:inline">WhatsApp Stylist</span>
              <span className="sm:hidden">Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EEEEEE] bg-white px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-4 text-sm font-medium uppercase tracking-wider text-[#111111]">
            <a
              href="#koleksi"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#B38E5D] py-1 border-b border-[#F5F5F5]"
            >
              Koleksi Busana
            </a>
            <a
              href="#kategori"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#B38E5D] py-1 border-b border-[#F5F5F5]"
            >
              Kategori Busana
            </a>
            <a
              href="#desainer"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#B38E5D] py-1 border-b border-[#F5F5F5]"
            >
              Kiprah Desainer Riris Ghofir
            </a>
            <a
              href="#butik"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#B38E5D] py-1"
            >
              Alamat Butik Surabaya
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
