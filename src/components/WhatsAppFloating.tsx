import React from "react";
import { MessageCircle } from "lucide-react";
import { BOUTIQUE_INFO } from "../data/catalog";

export const WhatsAppFloating: React.FC = () => {
  const handleChat = () => {
    const text = encodeURIComponent(
      "Halo Riris Ghofir Boutique, saya melihat website katalog dan ingin konsultasi mengenai koleksi busana/fitting kebaya."
    );
    window.open(`https://wa.me/${BOUTIQUE_INFO.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip hint */}
      <div className="hidden md:flex items-center px-3.5 py-2 bg-white text-[#111111] text-xs font-medium border border-[#E5E5E5] shadow-lg rounded-none tracking-wide">
        <span className="w-2 h-2 rounded-full bg-[#25D366] mr-2 animate-pulse" />
        Konsultasi Stylist Butik
      </div>

      {/* Floating Button */}
      <button
        onClick={handleChat}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300 focus:outline-hidden"
        aria-label="Chat WhatsApp Stylist Riris Ghofir"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
};
