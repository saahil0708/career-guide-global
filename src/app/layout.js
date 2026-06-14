import "./globals.css";
import Navbar from "../components/navbar";
import RightTallCard from "../components/RightTallCard";
import ScrollTracker from "../components/ui/ScrollTracker";
import SmoothScrolling from "../components/SmoothScrolling";

export const metadata = {
  title: "Career Guide Global - Redesign",
  description: "Starting the new premium UI from scratch.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#181818] text-white min-h-screen selection:bg-[#ccff00]/25 selection:text-[#ccff00]">
        <SmoothScrolling>
          <ScrollTracker />
          <div className="w-full max-w-[1240px] mx-auto px-6 md:px-8 py-6">
            {children}
          </div>
        </SmoothScrolling>
      </body>
    </html>
  );
}
