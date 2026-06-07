import "./globals.css";
import Maintenance from "./Components/Global/Maintenance";

export const metadata = {
    title: 'Career Guide Global',
    icons: {
      icon: '/favicon.ico'
    }
}

// Set this to true to enable the maintenance / upgradation screen globally
const MAINTENANCE_MODE = true;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {MAINTENANCE_MODE ? <Maintenance /> : children}
      </body>
    </html>
  );
}

