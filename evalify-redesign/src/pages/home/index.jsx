import Navbar from "../../components/common/Navbar";
import HeroSection from "../../components/home/hero/HeroSection";
import TrustedCompaniesSection from "../../components/home/trusted-companies/TrustedCompaniesSection";
import HowItWorksSection from "../../components/home/how-it-works/HowItWorksSection";
import InterviewShowcaseSection from "../../components/home/interview-showcase/InterviewShowcaseSection";
import FeaturesSection from "../../components/home/features/FeaturesSection";
import PricingSection from "../../components/home/pricing/PricingSection";
import TestimonialsSection from "../../components/home/testimonials/TestimonialsSection";
import FAQSection from "../../components/home/faq/FAQSection";
import CTASection from "../../components/home/cta/CTASection";
import FooterSection from "../../components/home/footer/FooterSection";

function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <TrustedCompaniesSection/>
            <HowItWorksSection/>
            <InterviewShowcaseSection/>
            <FeaturesSection/>
            <PricingSection/>
            <TestimonialsSection/>
            <FAQSection/>
            <CTASection/>
            <FooterSection/>
        </>
    );
}

export default Home;