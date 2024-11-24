import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Abd Elbasset Khettabi | Full-Stack Developer',
  description: 'Senior Full-Stack Developer specializing in modern web technologies',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'TypeScript', 'Web Development'],
  authors: [{ name: 'Abd Elbasset Khettabi' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abdelbassetkh.dev',
    title: 'Abd Elbasset Khettabi | Full-Stack Developer',
    description: 'Senior Full-Stack Developer specializing in modern web technologies',
    siteName: 'Abd Elbasset Khettabi Portfolio'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}