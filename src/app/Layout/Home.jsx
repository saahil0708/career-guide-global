import CareerHeroSection from "../Components/Home/Hero";
import CareerCounselingNavbar from "../Components/Global/Navbar";
import CTA from '../Components/Home/CTA';
import CursorGradient from "../Components/Home/CursorGradient";
import ServicesPreview from "../Components/Home/Services";
import Testimonials from "../Components/Home/Testimonials";
import FAQ from "../Components/Home/FAQ";
import Footer from "../Components/Global/Footer";
import Home from "../Components/Data/Images";

export default function Layout() {
    return (
        <div className="max-w-full min-h-screen">
            <CursorGradient />
            <CareerCounselingNavbar />

            <div className="mx-auto px-4 py-2">
                <CareerHeroSection />
                <CTA />
                <ServicesPreview />
            </div>

            <Home />

            <div className="mx-auto px-4 py-2">
                <Testimonials />
                <FAQ />
            </div>

            <Footer />
        </div>
    )
}