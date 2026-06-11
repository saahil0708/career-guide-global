import "./globals.css";
import Navbar from "../components/Navbar";
import RightTallCard from "../components/RightTallCard";


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
      <body className="bg-black text-white min-h-screen selection:bg-[#ccff00]/25 selection:text-[#ccff00]">
        <div className="w-full max-w-[1240px] mx-auto px-6 md:px-8 py-6 flex flex-col justify-center lg:h-screen lg:max-h-[820px] lg:min-h-[620px] lg:overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full lg:h-full lg:overflow-hidden">
            {/* Left Column: Navbar + Children */}
            <div className="lg:col-span-7 flex flex-col gap-6 lg:h-full lg:overflow-hidden">
              <Navbar />
              <div className="flex-1 flex flex-col min-h-0 lg:overflow-y-auto pr-1">
                {children}
              </div>
            </div>

            {/* Right Column: Skyscraper Card */}
            <div className="lg:col-span-5 hidden lg:block">
              <RightTallCard />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

