import Footer from "../Components/Global/Footer";
import CareerCounselingNavbar from "../Components/Global/Navbar";
import CursorGradient from "../Components/Home/CursorGradient";
import CounselingStudents from "../Components/Students/List";

export default function StudentsLayout() {
    return (
        <div className="max-w-full min-h-screen">
            <CursorGradient />
            <CareerCounselingNavbar />
            <div className="mx-auto px-4 py-2">
                <CounselingStudents />
            </div>
            <Footer />
        </div>
    )
}