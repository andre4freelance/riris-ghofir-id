import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { CategoryTiles } from "./components/CategoryTiles";
import { CatalogSection } from "./components/CatalogSection";
import { DesignerStory } from "./components/DesignerStory";
import { BoutiqueExperience } from "./components/BoutiqueExperience";
import { StoreLocation } from "./components/StoreLocation";
import { Footer } from "./components/Footer";
import { WhatsAppFloating } from "./components/WhatsAppFloating";
import { QuickViewModal } from "./components/QuickViewModal";
import { FashionProduct } from "./data/catalog";

export function App() {
  const [selectedProduct, setSelectedProduct] = useState<FashionProduct | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111111] antialiased">
      {/* Zalora Style Sticky Header */}
      <Header />

      {/* Main Showcase Sections (Landing Page) */}
      <main className="flex-1">
        <HeroSection />
        <CategoryTiles />
        <CatalogSection onQuickView={(product) => setSelectedProduct(product)} />
        <DesignerStory />
        <BoutiqueExperience />
        <StoreLocation />
      </main>

      {/* Footer & Floating WhatsApp Contact */}
      <Footer />
      <WhatsAppFloating />

      {/* Quick View Modal */}
      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

export default App;
