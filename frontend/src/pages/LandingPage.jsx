import Navbar from "../components/landing/Navbar";
import HeroSection from "../components//landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import Footer from "../components/landing/Footer";
import DashboardShowcase from "../components/landing/DashboardShowcase";
import HowItWorks from "../components/landing/HowItWorks";

function LandingPage()
{
    return (
        <>
        <Navbar/>
        <HeroSection/>
        <FeaturesSection/>
        <DashboardShowcase />
        <HowItWorks />
        <Footer/>
        </>
    );
}

export default LandingPage;