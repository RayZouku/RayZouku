import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from '@/components/providers/theme-provider';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rayzouku.dev'),
  title: {
    template: '%s | Ray Zouku - Full Stack Developer',
    default: 'Ray Zouku - Full Stack Developer & Technology Enthusiast'
  },
  description: 'Professional portfolio of Ray Zouku - Full Stack Developer specializing in modern web technologies, mobile development, and innovative digital solutions.',
  keywords: [
    'Ray Zouku',
    'Full Stack Developer',
    'Web Developer',
    'Next.js',
    'React',
    'TypeScript',
    'JavaScript',
    'Python',
    'Mobile Development',
    'Flutter',
    'Portfolio',
    'Indonesia Developer',
    'Jakarta'
  ],
  authors: [{ name: 'Ray Zouku', url: 'https://github.com/RayZouku' }],
  creator: 'Ray Zouku',
  openGraph: {
    type: 'website',
    locale: 'en',
    url: 'https://rayzouku.dev',
    title: 'Ray Zouku - Full Stack Developer',
    description: 'Professional portfolio showcasing modern web development and innovative digital solutions',
    siteName: 'Ray Zouku Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ray Zouku - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ray Zouku - Full Stack Developer',
    description: 'Professional portfolio showcasing modern web development',
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}