import HeroSection from "../../components/home/hero/HeroSection";
import StatsSection from "../../components/home/stats/StatsSection";
import JourneySection from "../../components/home/journey/JourneySection";
import AssessmentSection from "../../components/home/assessment/AssessmentSection";
import AiChoicesSection from "../../components/home/ai-choices/AiChoicesSection";
import TestimonialsSection from "../../components/home/testimonials/TestimonialsSection";
import FAQSection from "../../components/home/faq/FAQSection";
import FooterSection from "../../components/home/footer/FooterSection";
import EverythingSection from "../../components/home/toolkit/Everything";
import { Box } from "@mui/material";

function Home() {
    return (
        <Box
            sx={{
                backgroundColor: "background.hero",
            }}
        >
            <HeroSection />

            <Box
                sx={{
                    "& > section": {
                        mb: { xs: 6, md: 10 },
                    },
                }}
            >
                 <StatsSection />
                <JourneySection />
                <AssessmentSection />
                <EverythingSection />
                <AiChoicesSection />
                <TestimonialsSection />
                <FAQSection />
            </Box>

            <FooterSection />
        </Box>
    );
}

export default Home;