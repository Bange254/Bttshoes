import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'BTT Shoes - Quality Footwear in Kenya',
    template: '%s | BTT Shoes'
  },
  description: 'Discover premium quality shoes for men and women. From casual sneakers to formal footwear, BTT Shoes offers retail and wholesale options with delivery across Kenya.',
  keywords: ['shoes', 'footwear', 'sneakers', 'boots', 'Kenya', 'Nairobi', 'wholesale', 'retail'],
  authors: [{ name: 'BTT Shoes' }],
  creator: 'BTT Shoes',
  publisher: 'BTT Shoes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bttshoes.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://bttshoes.com',
    title: 'BTT Shoes - Quality Footwear in Kenya',
    description: 'Discover premium quality shoes for men and women. From casual sneakers to formal footwear, BTT Shoes offers retail and wholesale options with delivery across Kenya.',
    siteName: 'BTT Shoes',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BTT Shoes - Quality Footwear',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BTT Shoes - Quality Footwear in Kenya',
    description: 'Discover premium quality shoes for men and women. From casual sneakers to formal footwear, BTT Shoes offers retail and wholesale options with delivery across Kenya.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
