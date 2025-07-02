import "./globals.css";
// import Logo from '../../public/image.png';

export const metadata = {
    title: 'Career Guide Global',
    // icons: {
    //   icon: Logo
    // }
}


export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
