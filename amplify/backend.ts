import { defineBackend, secret } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
});

// Define secrets that will be available as environment variables
backend.addOutput({
  custom: {
    YOUTUBE_API_KEY: secret('YOUTUBE_API_KEY'),
  },
});
