import { useState } from "react";
import { CartProvider } from "@/lib/cart";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import MenuSection from "@/components/MenuSection";
import CartDrawer from "@/components/CartDrawer";
import SocialProof from "@/components/SocialProof";
import HygieneSection from "@/components/HygieneSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import MapSection from "@/components/MapSection";
import FloatingButtons from "@/components/FloatingButtons";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import StickyOrderBar from "@/components/StickyOrderBar";

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navbar onCartClick={() => setCartOpen(true)} />
        <HeroBanner />
        <SocialProof />
        <MenuSection />
        <HygieneSection />
        <ReviewsSection />
        <MapSection />
        <FAQSection />
        <Footer />
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
        <FloatingButtons />
        <Chatbot />
      </div>
    </CartProvider>
  );
};

export default Index;
