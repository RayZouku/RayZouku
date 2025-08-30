import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/components/providers/theme-provider';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEnglish = locale === 'en';
  
  return {
    metadataBase: new URL('https://rayzouku.dev'),
    title: {
      template: '%s | Ray Zouku - Full Stack Developer',
      default: 'Ray Zouku - Full Stack Developer & Technology Enthusiast'
    },
    description: isEnglish 
      ? 'Professional portfolio of Ray Zouku - Full Stack Developer specializing in modern web technologies, mobile development, and innovative digital solutions.'
      : 'Portofolio profesional Ray Zouku - Full Stack Developer yang mengkhususkan diri dalam teknologi web modern, pengembangan mobile, dan solusi digital inovatif.',
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
      ...(isEnglish ? ['Indonesia Developer', 'Jakarta'] : ['Developer Indonesia', 'Jakarta'])
    ],
    authors: [{ name: 'Ray Zouku', url: 'https://github.com/RayZouku' }],
    creator: 'Ray Zouku',
    openGraph: {
      type: 'website',
      locale: locale,
      url: `https://rayzouku.dev/${locale}`,
      title: 'Ray Zouku - Full Stack Developer',
      description: isEnglish
        ? 'Professional portfolio showcasing modern web development and innovative digital solutions'
        : 'Portofolio profesional yang menampilkan pengembangan web modern dan solusi digital inovatif',
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
      description: isEnglish
        ? 'Professional portfolio showcasing modern web development'
        : 'Portofolio profesional pengembangan web modern',
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
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as 'en' | 'id')) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}