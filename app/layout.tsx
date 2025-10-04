import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCallButton from '@/components/FloatingCallButton';
import CookieConsent from '@/components/CookieConsent';
import PageTransition from '@/components/animations/PageTransition';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Sparkle Clean - Professional Cleaning Services Melbourne',
  description: 'Professional cleaning services in Melbourne. Carpet cleaning, end of lease cleaning, office cleaning, and more. Quality guaranteed with every clean.',
  keywords: 'cleaning services melbourne, carpet cleaning, end of lease cleaning, office cleaning, professional cleaners',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  authors: [{ name: 'Sparkle Clean' }],
  creator: 'Sparkle Clean',
  publisher: 'Sparkle Clean',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Header />
        <main className="min-h-screen relative">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        <FloatingCallButton />
        <CookieConsent />
      </body>
    </html>
  );
}