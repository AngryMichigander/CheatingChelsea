import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Cheating Chelsea Exposed - The Truth About Chelsea Smallwood',
  description:
    "Exposing the harm caused by Chelsea Smallwood and 'The Other Woman and the Wife' group. Learn about the Kristen Jacobs lawsuit, online harassment, and the controversial business of monetizing infidelity.",
  keywords: [
    'Chelsea Smallwood',
    'The Other Woman and the Wife',
    'Kristen Jacobs',
    'infidelity',
    'cheating',
    'online harassment',
    'cyberbullying',
    'GoFundMe',
    'lawsuit',
    'cheatingchelsea.com',
  ],
  openGraph: {
    title: 'Cheating Chelsea Exposed - The Truth About Chelsea Smallwood',
    description:
      "Exposing the harm caused by Chelsea Smallwood's controversial business.",
    images: [
      {
        url: 'https://placehold.co/1200x630.png',
        width: 1200,
        height: 630,
        alt: 'A banner for the Cheating Chelsea Exposed website.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cheating Chelsea Exposed - The Truth About Chelsea Smallwood',
    description:
      "Exposing the harm caused by Chelsea Smallwood's controversial business.",
    images: ['https://placehold.co/1200x630.png'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
