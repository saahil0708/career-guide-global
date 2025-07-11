import { InfiniteMovingCards } from "../Home/Partners";
import SectionHeading from "../Home/SectionHeading";

const testimonials = [
    {
        "quote": "This UI component is truly exceptional!",
        "name": "Alice Johnson",
        "title": "Product Designer",
        "image": "https://67uzoom719.ufs.sh/f/YNNjoMX3eGAoDKurtuTiGWj9q1aR4nJU2e5spghwDlOMy0mE"
    },
    {
        "quote": "The animations feel incredibly smooth and natural.",
        "name": "Brian Smith",
        "title": "Frontend Developer",
        "image": "https://67uzoom719.ufs.sh/f/YNNjoMX3eGAoirvstXIzBqvJm9tHYuGFIeMA35K2SxTigfQE"
    },
    {
        "quote": "Such a creative and elegant scrolling effect!",
        "name": "Clara Liu",
        "title": "UX Engineer",
        "image": "https://67uzoom719.ufs.sh/f/YNNjoMX3eGAobsd6M9LPwBAdot8vb5FSrLH4Ej7xhlWpyU2i"
    },
    {
        "quote": "Perfect for portfolio showcases and testimonial sliders.",
        "name": "David Kim",
        "title": "Creative Director",
        "image": "https://67uzoom719.ufs.sh/f/YNNjoMX3eGAoZDh1FjfwKPLORzD65d9wmabZ0JXGvI7lfjcg"
    },
    {
        "quote": "My team loved the component at first glance!",
        "name": "Emma Chen",
        "title": "Lead Developer",
        "image": "https://67uzoom719.ufs.sh/f/YNNjoMX3eGAo2pqeBeYH1gV0osUNMIXYr2niz3mB7wCv4qxl"
    },
    {
        "quote": "My team loved the component at first glance!",
        "name": "Emma Chen",
        "title": "Lead Developer",
        "image": "https://67uzoom719.ufs.sh/f/YNNjoMX3eGAo8noz804mOzSXd6Hc7qa94vBZJGQLxPbD2I1l"
    },
    {
        "quote": "My team loved the component at first glance!",
        "name": "Emma Chen",
        "title": "Lead Developer",
        "image": "https://67uzoom719.ufs.sh/f/YNNjoMX3eGAoaNeHbLVWOmzwIXMuY0Ax278KiLJdo69fnbZh"
    },
    {
        "quote": "My team loved the component at first glance!",
        "name": "Emma Chen",
        "title": "Lead Developer",
        "image": "https://67uzoom719.ufs.sh/f/YNNjoMX3eGAoTeOGR4qWQbYMPIn2pCt13XU84uxg6AB7W0Zj"
    },
    {
        "quote": "My team loved the component at first glance!",
        "name": "Emma Chen",
        "title": "Lead Developer",
        "image": "https://67uzoom719.ufs.sh/f/YNNjoMX3eGAoLQwwJ6BwHjKPZg0XmdQsYFc8JTiIz43U7Eay"
    },
    {
        "quote": "My team loved the component at first glance!",
        "name": "Emma Chen",
        "title": "Lead Developer",
        "image": "https://67uzoom719.ufs.sh/f/YNNjoMX3eGAoPQ0CM5HeRwdpAFXv9uNn1Oy5ZTqz0E7gj3is"
    },
    {
        "quote": "My team loved the component at first glance!",
        "name": "Emma Chen",
        "title": "Lead Developer",
        "image": "https://67uzoom719.ufs.sh/f/YNNjoMX3eGAohlL2Dye2jvzgWkm3MTKy78E1rBUhPi5sYa0G"
    },
    {
        "quote": "My team loved the component at first glance!",
        "name": "Emma Chen",
        "title": "Lead Developer",
        "image": "https://67uzoom719.ufs.sh/f/YNNjoMX3eGAonvC4tVkoaC40xQSm3l7r915cL6BTpZGsEYzF"
    },
];

const testimonials1 = [
    {
        "quote": "This UI component is truly exceptional!",
        "name": "Alice Johnson",
        "title": "Product Designer",
        "image": "https://67uzoom719.ufs.sh/f/YNNjoMX3eGAoP9IjrDHeRwdpAFXv9uNn1Oy5ZTqz0E7gj3is"
    },
    {
        "quote": "The animations feel incredibly smooth and natural.",
        "name": "Brian Smith",
        "title": "Frontend Developer",
        "image": "https://scontent.fixc2-1.fna.fbcdn.net/v/t39.30808-6/486490608_1074284941390494_5181511498800838358_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=VL7TuaAX2p0Q7kNvwEAgS_W&_nc_oc=Adk_-zeAQuNMkVfQ5J1GJpytcpOdiq__gGa6fw-bAlzIrs-LFrcS2SCOyW8VxSRXzqU&_nc_zt=23&_nc_ht=scontent.fixc2-1.fna&_nc_gid=4IZAuRe47Bi9Ova7JJO7AA&oh=00_AfQtdOL0-qpMyxX38n3hmr3IagfqaJ-hfTt9VyhFEX56Pw&oe=68767DE7"
    },
    {
        "quote": "Such a creative and elegant scrolling effect!",
        "name": "Clara Liu",
        "title": "UX Engineer",
        "image": "https://67uzoom719.ufs.sh/f/YNNjoMX3eGAoMdlmpx4Uw25N4fTzahjckFBGCIL87WbEDeso"
    },
    {
        "quote": "Perfect for portfolio showcases and testimonial sliders.",
        "name": "David Kim",
        "title": "Creative Director",
        "image": "https://67uzoom719.ufs.sh/f/YNNjoMX3eGAoKKN78KxhneNBHWLy5iZpGVrFtbUzXCdTglcP"
    },
    {
        "quote": "My team loved the component at first glance!",
        "name": "Emma Chen",
        "title": "Lead Developer",
        "image": "https://67uzoom719.ufs.sh/f/YNNjoMX3eGAoYdrkzpX3eGAorXt4j5Exlkc0wbTS7dgh2LqP"
    },
    {
        "quote": "My team loved the component at first glance!",
        "name": "Emma Chen",
        "title": "Lead Developer",
        "image": "https://67uzoom719.ufs.sh/f/YNNjoMX3eGAovfmVTz6EZrKUlwqpR0hymABQ5Wsi8dxLGkI4"
    },
    {
        "quote": "My team loved the component at first glance!",
        "name": "Emma Chen",
        "title": "Lead Developer",
        "image": "https://67uzoom719.ufs.sh/f/YNNjoMX3eGAo4E3odl25MOKGiRvy9HlFkCfUQLJeTjP8gaXh"
    },
    {
        "quote": "My team loved the component at first glance!",
        "name": "Emma Chen",
        "title": "Lead Developer",
        "image": "https://67uzoom719.ufs.sh/f/YNNjoMX3eGAov2zhfUEZrKUlwqpR0hymABQ5Wsi8dxLGkI42"
    },
    {
        "quote": "My team loved the component at first glance!",
        "name": "Emma Chen",
        "title": "Lead Developer",
        "image": "https://67uzoom719.ufs.sh/f/YNNjoMX3eGAoRMLeKYcHGfDMqrks2OWCYSJw0odVQBbe5RtK"
    },
    {
        "quote": "My team loved the component at first glance!",
        "name": "Emma Chen",
        "title": "Lead Developer",
        "image": "https://67uzoom719.ufs.sh/f/YNNjoMX3eGAoU3IPiMR9fbF6d874R5WPiCEMeSQ1r2YchXam"
    },
    {
        "quote": "My team loved the component at first glance!",
        "name": "Emma Chen",
        "title": "Lead Developer",
        "image": "https://67uzoom719.ufs.sh/f/YNNjoMX3eGAonoX6xaBkoaC40xQSm3l7r915cL6BTpZGsEYz"
    },
    {
        "quote": "My team loved the component at first glance!",
        "name": "Emma Chen",
        "title": "Lead Developer",
        "image": "https://67uzoom719.ufs.sh/f/YNNjoMX3eGAohwnH83e2jvzgWkm3MTKy78E1rBUhPi5sYa0G"
    },
];

export default function Home() {
    return (
        <div className="">
            <SectionHeading />
            <InfiniteMovingCards items={testimonials} direction="left" />
            <InfiniteMovingCards items={testimonials1} direction="right" />
        </div>
    );
}
