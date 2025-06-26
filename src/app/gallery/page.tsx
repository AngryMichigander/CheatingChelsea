
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
    title: "Video Gallery - Community Coverage of Chelsea Smallwood",
    description: "Watch YouTube commentary and analysis on Chelsea Smallwood, The Other Woman and the Wife, and the ongoing controversy.",
};

interface Video {
  id: string;
  title: string;
}

// Just list the YouTube Video IDs here
const videoIds = [
  'R35g0-dG6Xw',
  'vV_uImy858s',
  'JmUaAAbA9wU',
];

// Fallback data in case the YouTube API call fails or the key is not provided.
const fallbackData: Video[] = [
    { id: 'R35g0-dG6Xw', title: 'Life Coach CHELSEA SMALLWOOD Is SUING Her HUSBANDS Ex Wife... It Gets WORSE' },
    { id: 'vV_uImy858s', title: 'The Infidelity "Coach" Who Monetizes Affairs Is Now Suing The Betrayed Wife' },
    { id: 'JmUaAAbA9wU', title: 'Affair Coach Chelsea Smallwood Is SUING The Ex-Wife... Allegedly' },
];

async function getYouTubeVideos(ids: string[]): Promise<Video[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    console.warn("YOUTUBE_API_KEY environment variable not set. Using hardcoded video titles as fallback.");
    return fallbackData.filter(video => ids.includes(video.id));
  }

  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${ids.join(',')}&key=${apiKey}`;

  try {
    const response = await fetch(url, { next: { revalidate: 3600 } }); // Revalidate every hour
    if (!response.ok) {
      const errorData = await response.json();
      console.error("YouTube API Error:", errorData.error.message);
      return fallbackData.filter(video => ids.includes(video.id));
    }

    const data = await response.json();
    if (!data.items || data.items.length === 0) {
      return fallbackData.filter(video => ids.includes(video.id));
    }

    return data.items.map((item: any) => ({
      id: item.id,
      title: item.snippet.title,
    }));
  } catch (error) {
    console.error("Failed to fetch from YouTube API:", error);
    return fallbackData.filter(video => ids.includes(video.id));
  }
}

export default async function GalleryPage() {
  const videos = await getYouTubeVideos(videoIds);

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
            {videos.length > 0 ? videos.map((video) => (
              <div key={video.id} className="bg-card rounded-lg shadow-sm border overflow-hidden flex flex-col">
                <Link href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="block relative group">
                  <Image
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={`Thumbnail for ${video.title}`}
                    width={480}
                    height={360}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                   <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </Link>
                <div className="p-4 flex-grow">
                   <h2 className="text-lg font-semibold text-card-foreground">
                     <Link href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
                       {video.title} <ExternalLink className="w-4 h-4 text-muted-foreground" />
                     </Link>
                   </h2>
                </div>
              </div>
            )) : (
               <p className="text-center col-span-full">Could not load videos. Please try again later.</p>
            )}
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
