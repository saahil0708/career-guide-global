import "./globals.css";

export const metadata = {
  title: "Career Guide Global - Redesign",
  description: "Starting the new premium UI from scratch.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className="bg-gray-50 text-neutral-900 min-h-screen selection:bg-[#ca0019]/20 selection:text-[#ca0019]">
        {children}
      </body>
    </html>
  );
}
