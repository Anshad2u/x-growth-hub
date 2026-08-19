export interface TweetMetrics {
  replies: number;
  reposts: number;
  likes: number;
  bookmarks: number;
  views: number;
  quote_count: number;
}

export interface TweetScore {
  engagement_score: number;
  view_weighted_score: number;
  bookmark_score: number;
  engagement_rate: number;
  breakdown: {
    replies_x20: number;
    reposts_x2: number;
    likes_x0_5: number;
    bookmarks_x80: number;
  };
}

export interface Tweet {
  tweet_id: string;
  url: string;
  date: string;
  content: string;
  full_content: string;
  score: TweetScore;
  raw_metrics: TweetMetrics;
}

export interface AnalysisResult {
  username: string;
  total_tweets: number;
  generated_at: string;
  formula: string;
  top_25_tweets: Tweet[];
  all_tweets: Tweet[];
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:5000';

export async function analyzeProfile(
  username: string,
  maxTweets: number = 100
): Promise<AnalysisResult> {
  const resp = await fetch(`${API_BASE}/api/analyze-tweets/${username}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    next: { revalidate: 60 }
  });

  if (!resp.ok) {
    const errorText = await resp.text();
    throw new Error(`API error ${resp.status}: ${errorText}`);
  }

  return resp.json();
}
