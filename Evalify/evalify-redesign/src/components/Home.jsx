import Navbar from "./common/Navbar";
import HeroSection from "./HeroSection";
import TrustedCompaniesSection from "./TrustedCompaniesSection";
import HowItWorksSection from "./HowItWorksSection";
import InterviewShowcaseSection from "./InterviewShowcaseSection";
import FeaturesSection from "./FeaturesSection";
import PricingSection from "./PricingSection";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import FooterSection from "./FooterSection";

function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <TrustedCompaniesSection />
            <HowItWorksSection />
            <InterviewShowcaseSection />
            <FeaturesSection />
            <PricingSection />
            <TestimonialsSection />
            <FAQSection />
            <CTASection />
            <FooterSection />
        </>
    );
}

export default Home;
