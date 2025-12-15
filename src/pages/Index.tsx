import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyMaxana from "@/components/home/WhyMaxana";
import BenefitsSection from "@/components/home/BenefitsSection";
import BrandStory from "@/components/home/BrandStory";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustStrip />
      <FeaturedProducts />
      <WhyMaxana />
      <BenefitsSection />
      <BrandStory />
    </Layout>
  );
};

export default Index;
