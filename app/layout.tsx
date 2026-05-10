import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Popup from '@/components/Popup';
import './globals.css';

export const metadata: Metadata = {
  title: 'Book Flights Now — Talk to a Live Travel Agent | +1 855-771-6048',
  description:
    'Speak with a live flight booking agent now. Get real fares, real availability, and your booking handled fast. Call +1 855-771-6048 anytime.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Popup />
      </body>
    </html>
  );
}
