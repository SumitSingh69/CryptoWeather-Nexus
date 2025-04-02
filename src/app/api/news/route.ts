import { NextResponse } from "next/server";

const NEWSDATA_API_KEY = process.env.NEWSDATA_API_KEY;
const NEWSDATA_API_URL = "https://newsdata.io/api/1";

export async function GET() {
  if (!NEWSDATA_API_KEY) {
    return NextResponse.json(
      { error: "NewsData API key not configured" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `${NEWSDATA_API_URL}/news?apikey=${NEWSDATA_API_KEY}&q=cryptocurrency&language=en&size=5`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch news data");
    }

    const data = await response.json();

    // Transform the data to match our interface
    const transformedNews = data.results.map((item: any) => ({
      id: item.article_id || item.link,
      title: item.title,
      description: item.description || "",
      url: item.link,
      publishedAt: item.pubDate,
      source: item.source_id,
    }));

    return NextResponse.json(transformedNews);
  } catch (error) {
    console.error("News API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch news data" },
      { status: 500 }
    );
  }
}
