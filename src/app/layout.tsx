import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cheating Chelsea Exposed - The Truth About Chelsea Smallwood',
  description:
    "Uncovering the truth about Chelsea Smallwood, The Other Woman and the Wife, and the Kristen Jacobs lawsuit. Exposing the controversial business of monetizing infidelity, cyberbullying, and online harassment.",
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
      "Uncovering the truth about Chelsea Smallwood and the controversial business of monetizing infidelity.",
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
      "Uncovering the truth about Chelsea Smallwood and the controversial business of monetizing infidelity.",
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
      <body className={`${inter.className} font-body antialiased`}>
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
