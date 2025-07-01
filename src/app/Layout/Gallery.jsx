import CareerCounselingNavbar from "../Components/Global/Navbar";
import CursorGradient from "../Components/Home/CursorGradient";
import GalleryImages from '../Components/Gallery/First';
import StudentsGallery from "../Components/Gallery/StudentGallery";

export default function GalleryLayout() {
    return (
        <div className="max-w-full min-h-screen">
            <CursorGradient />
            <CareerCounselingNavbar />
            <div className="mx-auto px-4 py-2">
                <GalleryImages />
                <StudentsGallery />
            </div>
        </div>
    )
}