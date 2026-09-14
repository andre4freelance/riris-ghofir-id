import React from "react";
import { CalendarCheck, HelpCircle } from "lucide-react";
import { BOUTIQUE_INFO } from "../data/catalog";
import { ImageWithFallback } from "./ImageWithFallback";

export const BoutiqueExperience: React.FC = () => {
  return (
    <section id="layanan" className="py-12 sm:py-16 lg:py-24 bg-[#FAF8F5] border-t border-[#EEEEEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title without AI logo */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#B38E5D] font-semibold block mb-2">
            Atelier Bespoke & Fitting Journey
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#111111] font-semibold mb-3 sm:mb-4">
            Alur Layanan Busana & Reservasi Fitting
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#666666] leading-relaxed">
            Menghadirkan pengalaman konsultasi busana yang personal, penuh kehangatan, dan presisi tinggi untuk momen sakral Anda.
          </p>
        </div>

        {/* 3 Step Process Card Grid (1 col on mobile, 3 cols on tablet/desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="card bg-white p-6 sm:p-8 border border-[#E8E2D5] rounded-none shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#111111] text-[#B38E5D] flex items-center justify-center mb-4 sm:mb-6 font-serif text-lg sm:text-xl font-bold">
                01
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#111111] mb-2">
                Pilih Inspirasi Busana
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-4">
                Pilih siluet kebaya modern atau tunik bordir dari koleksi katalog showcase website kami sebagai referensi dasar.
              </p>
            </div>
            <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#B38E5D]">
              Eksplorasi Katalog
            </div>
          </div>

          <div className="card bg-white p-6 sm:p-8 border border-[#E8E2D5] rounded-none shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#111111] text-[#B38E5D] flex items-center justify-center mb-4 sm:mb-6 font-serif text-lg sm:text-xl font-bold">
                02
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#111111] mb-2">
                Konsultasi & Pengukuran
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-4">
                Jadwalkan sesi fitting privat di butik kami (Jl. Ngagel Jaya 96 Surabaya) atau konsultasi virtual bagi pelanggan luar kota.
              </p>
            </div>
            <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#B38E5D]">
              Janji Temu Fitting
            </div>
          </div>

          <div className="card bg-white p-6 sm:p-8 border border-[#E8E2D5] rounded-none shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#111111] text-[#B38E5D] flex items-center justify-center mb-4 sm:mb-6 font-serif text-lg sm:text-xl font-bold">
                03
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#111111] mb-2">
                Pengerjaan & Fitting Akhir
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-4">
                Setiap busana dikerjakan secara teliti oleh artisan bordir tangan kami hingga fitting akhir sempurna sesuai proporsi tubuh Anda.
              </p>
            </div>
            <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#B38E5D]">
              Couture Handcrafted
            </div>
          </div>
        </div>

        {/* Atelier Atmosphere Feature Banner using authentic photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-white border border-[#EAEAEA] p-5 sm:p-8 lg:p-10 mb-12 sm:mb-16 shadow-xs">
          <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden bg-[#111111]">
            <ImageWithFallback
              src="/images/products/rose-dust-kebaya-02-seated.jpg"
              alt="Suasana Busana dan Fitting Riris Ghofir Boutique Surabaya"
              aspectRatio="aspect-[16/10]"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3">
              <span className="badge badge-neutral rounded-none text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold bg-[#111111] text-white border-none shadow-xs">
                Surabaya Atelier
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#B38E5D] font-semibold mb-2">
              Ruang Fitting Privat & Personal
            </span>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#111111] font-semibold mb-3 sm:mb-4">
              Kenyamanan Menentukan Busana Impian Anda
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6">
              Di butik fisik kami di Jl. Ngagel Jaya No. 96 Surabaya, Anda dapat merasakan langsung tekstur kain, memilih paduan warna, dan berkonsultasi mengenai detail bordir bersama tim stylist kami.
            </p>
            <div>
              <a
                href={`https://wa.me/${BOUTIQUE_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Halo Riris Ghofir Boutique, saya ingin reservasi jadwal fitting kebaya / busana pesta di butik Surabaya."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-neutral rounded-none px-6 py-3.5 bg-[#111111] hover:bg-[#B38E5D] text-white text-xs font-semibold uppercase tracking-widest border-none gap-2 w-full sm:w-auto"
              >
                <CalendarCheck className="w-4 h-4 text-[#B38E5D]" />
                <span>Reservasi Jam Fitting</span>
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Accordion using DaisyUI collapse */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#B38E5D] font-semibold block mb-1">
              Frequently Asked Questions
            </span>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#111111] font-semibold">
              Pertanyaan Seputar Layanan & Pemesanan
            </h3>
          </div>

          <div className="space-y-3">
            <div className="collapse collapse-arrow bg-white border border-[#E5E5E5] rounded-none">
              <input type="checkbox" defaultChecked />
              <div className="collapse-title text-xs sm:text-sm font-semibold text-[#111111] pr-10">
                Apakah busana di Riris Ghofir Boutique bisa dibuat kustom sesuai ukuran badan?
              </div>
              <div className="collapse-content text-xs sm:text-sm text-[#666666] leading-relaxed">
                <p>
                  Ya, kami melayani pemesanan <em>custom bespoke</em> untuk kebaya pengantin, kebaya wisuda, seragam keluarga, maupun gaun pesta. Pengukuran dapat dilakukan langsung di butik kami di Surabaya atau melalui panduan pengukuran mandiri dengan arahan tim stylist kami untuk pelanggan di luar kota.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-white border border-[#E5E5E5] rounded-none">
              <input type="checkbox" />
              <div className="collapse-title text-xs sm:text-sm font-semibold text-[#111111] pr-10">
                Bagaimana cara reservasi jadwal fitting di Butik Jl. Ngagel Jaya Surabaya?
              </div>
              <div className="collapse-content text-xs sm:text-sm text-[#666666] leading-relaxed">
                <p>
                  Untuk memastikan kenyamanan ruang fitting privat dan ketersediaan stylist, Anda disarankan melakukan reservasi terlebih dahulu minimal H-1 melalui tombol WhatsApp di website ini dengan menyebutkan tanggal, jam yang diinginkan, dan jenis busana yang ingin dicoba.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-white border border-[#E5E5E5] rounded-none">
              <input type="checkbox" />
              <div className="collapse-title text-xs sm:text-sm font-semibold text-[#111111] pr-10">
                Apakah Riris Ghofir melayani pengiriman ke luar kota dan luar negeri?
              </div>
              <div className="collapse-content text-xs sm:text-sm text-[#666666] leading-relaxed">
                <p>
                  Tentu saja. Kami telah berpengalaman melayani pengiriman pesanan ke seluruh kota di Indonesia dan mancanegara dengan kurir berasuransi dan kemasan eksklusif yang aman menjaga kualitas kain dan bordir.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-white border border-[#E5E5E5] rounded-none">
              <input type="checkbox" />
              <div className="collapse-title text-xs sm:text-sm font-semibold text-[#111111] pr-10">
                Berapa lama estimasi waktu pengerjaan untuk kebaya atau gaun kustom?
              </div>
              <div className="collapse-content text-xs sm:text-sm text-[#666666] leading-relaxed">
                <p>
                  Waktu pengerjaan berkisar antara 2 hingga 4 minggu untuk koleksi ready-to-order atau penyesuaian ukuran, serta 4 hingga 8 minggu untuk pesanan adibusana kebaya pengantin dengan detail bordir manual dan taburan payet kristal penuh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
