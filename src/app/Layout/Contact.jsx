import ContactPage from "../Components/Contact/Contact";
import Footer from "../Components/Global/Footer";
import CareerCounselingNavbar from "../Components/Global/Navbar";
import CursorGradient from "../Components/Home/CursorGradient";

export default function ContactLayout() {
    return (
        <div className="max-w-full min-h-screen">
            <CursorGradient />
            <CareerCounselingNavbar />
            <div className="mx-auto px-4 py-2">
                <ContactPage />
            </div>
            <Footer />
        </div>
    )
}