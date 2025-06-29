
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
    title: "Dadvocate Vids - A curated collection of videos from The Dadvocate",
    description: "A curated collection of videos from The Dadvocate.",
};

interface Video {
  id: string;
  title: string;
}

// Placeholder video IDs - these can be replaced with actual Dadvocate video IDs.
const videoIds = [
  'dbPXoZ_cri8',
  'y2SfYffLZQ4',
  'CdJLCln1Kjg',
  'e6rHHtq5K1k',
  'GbWJfWhkOhc',
  'pzefTg9jygs',
  'zp3PRgtBOl0',
  'XZA6c5Gg7NA',
];

// Updated fallback data to be a reliable source of working videos.
const fallbackData: Video[] = [
    { id: 'dbPXoZ_cri8', title: 'Placeholder Dadvocate Video 1' },
    { id: 'y2SfYffLZQ4', title: 'Placeholder Dadvocate Video 2' },
];

async function getYouTubeVideos(ids: string[]): Promise<Video[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    console.warn("YOUTUBE_API_KEY environment variable not set. Using hardcoded video titles as fallback.");
    return fallbackData;
  }

  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${ids.join(',')}&key=${apiKey}`;

  try {
    const response = await fetch(url, { next: { revalidate: 3600 } }); // Revalidate every hour
    if (!response.ok) {
      const errorData = await response.json();
      console.error("YouTube API Error:", errorData.error.message);
      console.log("Falling back to hardcoded video data.");
      return fallbackData;
    }

    const data = await response.json();
    if (!data.items || data.items.length === 0) {
      console.warn("YouTube API returned no items for the given video IDs. Falling back to hardcoded data.");
      return fallbackData;
    }
    
    interface YouTubeVideoItem {
      id: string;
      snippet: {
        title: string;
      };
    }
    
    const fetchedVideos = data.items.map((item: YouTubeVideoItem) => ({
      id: item.id,
      title: item.snippet.title,
    }));

    if (fetchedVideos.length < ids.length) {
        console.warn(`YouTube API only returned ${fetchedVideos.length} videos out of ${ids.length} requested. Some videos may be private or deleted.`);
    }

    return fetchedVideos;
  } catch (error) {
    console.error("Failed to fetch from YouTube API:", error);
    console.log("Falling back to hardcoded video data.");
    return fallbackData;
  }
}

export default async function DadvocatePage() {
  const videos = await getYouTubeVideos(videoIds);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow">
        <div className="container mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary font-headline">
              Dadvocate Vids
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              A curated collection of videos from The Dadvocate
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.length > 0 ? videos.map((video) => (
              <div key={video.id} className="bg-card rounded-lg shadow-sm border overflow-hidden flex flex-col">
                <div className="relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4 flex-grow">
                   <h2 className="text-lg font-semibold text-card-foreground">
                       {video.title}
                   </h2>
                   <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1 mt-2">
                        Watch on YouTube <ExternalLink className="w-4 h-4" />
                   </a>
                </div>
              </div>
            )) : (
               <p className="text-center col-span-full">Could not load videos. Please try again later.</p>
            )}
          </div>
          <div className="flex justify-center items-center gap-4 mt-12">
            <Button asChild>
              <Link href="/">Back to Home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/gallery">View Video Gallery &raquo;</Link>
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
