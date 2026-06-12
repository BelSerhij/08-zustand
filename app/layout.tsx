
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Providers from "../components/TanStackProvider/TanStackProvider";
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

export const metadata: Metadata = {
  title: 'My Notes',
  description: 'This is my Notes',
};
export const roboto = Roboto({
  subsets: ['latin'], 
  weight: ['100', '700'],
  variable: '--font-roboto', 
  display: 'swap', 
});

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
      <Providers>
        <Header />
          <main>{children}</main>
          {modal}
        <Footer />
      </Providers>
      </body>
    </html>
  );
}