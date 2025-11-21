import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { LovedOnesSection } from "@/components/LovedOnesSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { PlantGrowth } from "@/components/PlantGrowth";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <HowItWorks />
      <LovedOnesSection />
      <FeaturesGrid />
      <PlantGrowth />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
