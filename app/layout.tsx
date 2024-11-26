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
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
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
