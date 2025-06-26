import { InfiniteMovingCards } from "../Home/Partners";
import SectionHeading from "../Home/SectionHeading";

const testimonials = [
    {
        "quote": "This UI component is truly exceptional!",
        "name": "Alice Johnson",
        "title": "Product Designer",
        "image": "https://images.unsplash.com/photo-1607746882042-944635dfe10e"
    },
    {
        "quote": "The animations feel incredibly smooth and natural.",
        "name": "Brian Smith",
        "title": "Frontend Developer",
        "image": "https://images.unsplash.com/photo-1502767089025-6572583495b0"
    },
    {
        "quote": "Such a creative and elegant scrolling effect!",
        "name": "Clara Liu",
        "title": "UX Engineer",
        "image": "https://images.unsplash.com/photo-1527980965255-d3b416303d12"
    },
    {
        "quote": "Perfect for portfolio showcases and testimonial sliders.",
        "name": "David Kim",
        "title": "Creative Director",
        "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
    },
    {
        "quote": "My team loved the component at first glance!",
        "name": "Emma Chen",
        "title": "Lead Developer",
        "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    }
];

export default function Home() {
    return (
        <div className="">
            <SectionHeading />
            <InfiniteMovingCards items={testimonials} direction="left" />
            <InfiniteMovingCards items={testimonials} direction="right" />
        </div>
    );
}
