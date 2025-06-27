import type { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event) => {
  const apiKey = process.env.YOUTUBE_API_KEY;
  
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'YouTube API key not configured' }),
    };
  }

  const videoIds = JSON.parse(event.body || '{}').videoIds || [];
  
  if (!videoIds.length) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Video IDs are required' }),
    };
  }

  try {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoIds.join(',')}&key=${apiKey}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`);
    }

    const data = await response.json();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch YouTube data' }),
    };
  }
};