import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'] });

export const metadata = {
  title: 'The Mind - Digital Agency & Tech Education',
  description: 'The Mind Platform — 14+ years of technical excellence, 161+ delivered projects, 30,000+ students trained across the Arab world. Founder-led development with security and attention to detail.',
  icons: {
    icon: '/logo/favicon.ico',
    shortcut: '/logo/favicon.ico',
    apple: '/logo/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
