import Navbar from "../components/landing/Navbar";
import HeroSection from "../components//landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import Footer from "../components/landing/Footer";
import DashboardShowcase from "../components/landing/DashboardShowcase";
function LandingPage()
{
    return (
        <>
        <Navbar/>
        <HeroSection/>
        <FeaturesSection/>
        <DashboardShowcase />
        <Footer/>
        </>
    );
}

export default LandingPage;