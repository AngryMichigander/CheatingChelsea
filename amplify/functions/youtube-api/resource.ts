import { defineFunction, secret } from '@aws-amplify/backend';

export const youtubeApi = defineFunction({
  name: 'youtube-api',
  environment: {
    YOUTUBE_API_KEY: secret('YOUTUBE_API_KEY'),
  },
});