import "./globals.css";

export const metadata = {
    title: 'Career Guide Global'
}


export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
