import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Joshika Reddy Avuthu - Full Stack Developer',
  description: 'Full Stack Developer passionate about creating beautiful, functional, and user-friendly digital experiences.',
  keywords: 'Full Stack Developer, Web Developer, React, Next.js, TypeScript, JavaScript',
  authors: [{ name: 'Joshika Reddy Avuthu' }],
  creator: 'Joshika Reddy Avuthu',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Joshika Reddy Avuthu - Full Stack Developer',
    description: 'Full Stack Developer passionate about creating beautiful, functional, and user-friendly digital experiences.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joshika Reddy Avuthu - Full Stack Developer',
    description: 'Full Stack Developer passionate about creating beautiful, functional, and user-friendly digital experiences.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#3b82f6',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
