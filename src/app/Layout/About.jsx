import AboutUsPage from "../Components/About/AboutGroup";
import ImpactPage from "../Components/About/Impact";
import Mission from "../Components/About/Mission";
import Footer from "../Components/Global/Footer";
import CareerCounselingNavbar from "../Components/Global/Navbar";
import CursorGradient from "../Components/Home/CursorGradient";

export default function AboutLayout() {
    return (
        <div className="max-w-full min-h-screen">
            <CursorGradient />
            <CareerCounselingNavbar />
            <div className="mx-auto px-4 py-2">
                <AboutUsPage />
                <Mission />
                <ImpactPage />
            </div>
            <Footer />
        </div>
    )
}