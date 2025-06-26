
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Video Gallery - Community Coverage of Chelsea Smallwood",
    description: "Watch YouTube commentary and analysis on Chelsea Smallwood, The Other Woman and the Wife, and the ongoing controversy.",
};

const videos = [
  { id: 'R35g0-dG6Xw', title: 'Life Coach CHELSEA SMALLWOOD Is SUING Her HUSBANDS Ex Wife... It Gets WORSE' },
  { id: 'vV_uImy858s', title: 'The Infidelity "Coach" Who Monetizes Affairs Is Now Suing The Betrayed Wife' },
  { id: 'JmUaAAbA9wU', title: 'Affair Coach Chelsea Smallwood Is SUING The Ex-Wife... Allegedly' },
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow">
        <div className="container mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary font-headline">
              YouTube Community Coverage
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Commentary and analysis from creators across the platform.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-card p-4 rounded-lg shadow-sm border">
                <div className="relative overflow-hidden rounded-md" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                    title={`YouTube video player: ${video.title}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h2 className="mt-4 text-lg font-semibold text-card-foreground">{video.title}</h2>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="text-center py-6 text-sm text-muted-foreground">
        <div className="container mx-auto">
          <p>
            This website, cheatingchelsea.com, is dedicated to raising
            awareness and supporting the victims.
          </p>
          <p>
            For questions, comments, or concerns, please email:{' '}
            <a
              href="mailto:notacheater&#64;cheatingchelsea.com"
              className="text-primary hover:underline"
            >
              notacheater&#64;cheatingchelsea.com
            </a>
          </p>
          <p className="mt-4 italic">
            Disclaimer: This website is independently operated by a snarky
            Michigander and is not affiliated with or endorsed by Kristen
            Jacobs.
          </p>
          <p className="mt-2">&copy; 2025 Cheating Chelsea Exposed. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
