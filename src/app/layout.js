import "./globals.css";

export const metadata = {
    title: 'Career Guide Global',
    icons: {
      icon: '/favicon.ico'
    }
}


export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
