import "./globals.css";
import ScrollTracker from "../components/ui/ScrollTracker";
import SmoothScrolling from "../components/SmoothScrolling";
import DevelopmentModal from "../components/DevelopmentModal";
import CustomCursor from "../components/CustomCursor";
import Footer from "@/components/Footer";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata = {
  metadataBase: new URL('https://careerguideglobal.com'),
  title: {
    default: "Career Guide Global",
    template: "%s | Career Guide Global"
  },
  description: "Accelerate your professional journey with Career Guide Global. We connect elite leaders to international opportunities in technology, finance, and product management with certified global advisors.",
  keywords: ["Career Counseling", "Global Placements", "Tech Careers", "Finance Careers", "Salary Optimization", "International Jobs", "Career Guide Global", "Executive Placements", "Professional Growth"],
  authors: [{ name: "Career Guide Global" }],
  creator: "Career Guide Global",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://careerguideglobal.com",
    title: "Career Guide Global | Elite Career Placements",
    description: "Accelerate your professional journey. Match your ambitions with elite roles in technology, finance, and product management.",
    siteName: "Career Guide Global",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Guide Global | Elite Tech & Finance Placements",
    description: "Accelerating global professional careers with data-driven salary optimization and direct network referrals.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

import { Toaster } from 'sonner';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#181818] text-white min-h-screen selection:bg-[#ccff00]/25 selection:text-[#ccff00]">
        <Toaster 
          position="bottom-right" 
          toastOptions={{ 
            style: { 
              background: '#222222', 
              color: '#ffffff', 
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px'
            } 
          }} 
        />
        <SmoothScrolling>
          <CustomCursor />
          <ScrollTracker />
          <DevelopmentModal />
          <div className="w-full max-w-[1240px] mx-auto px-6 md:px-8 py-6">
            {children}
            <div className="border-t pt-10 border-gray-100/10">
              <Footer />
            </div>
          </div>
        </SmoothScrolling>
      </body>
    </html>
  );
}
