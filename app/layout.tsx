import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCallButton from '@/components/FloatingCallButton';
import CookieConsent from '@/components/CookieConsent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sparkle Clean - Professional Cleaning Services Melbourne',
  description: 'Professional cleaning services in Melbourne. Carpet cleaning, end of lease cleaning, office cleaning, and more. Quality guaranteed with every clean.',
  keywords: 'cleaning services melbourne, carpet cleaning, end of lease cleaning, office cleaning, professional cleaners',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingCallButton />
        <CookieConsent />
      </body>
    </html>
  );
}