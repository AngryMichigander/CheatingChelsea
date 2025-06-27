// Configuration helper for environment variables
export const config = {
  youtubeApiKey: process.env.YOUTUBE_API_KEY || process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || '',
};

// Helper to check if we're in a server environment
export const isServer = typeof window === 'undefined';