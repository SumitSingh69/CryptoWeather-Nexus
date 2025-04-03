import { NextResponse } from "next/server";

const NEWSDATA_API_KEY = process.env.NEWSDATA_API_KEY;
const NEWSDATA_API_URL = "https://newsdata.io/api/1";

// Define interface for NewsData API response item
interface NewsDataItem {
  article_id?: string;
  title: string;
  description?: string;
  link: string;
  pubDate: string;
  source_id: string;
}

export async function GET() {
  console.log("News API Request:", {
    apiKey: NEWSDATA_API_KEY ? "Present" : "Missing",
  });

  if (!NEWSDATA_API_KEY) {
    console.error("NewsData API key is missing");
    return NextResponse.json(
      { error: "NewsData API key not configured" },
      { status: 500 }
    );
  }

  try {
    console.log("Fetching crypto news...");
    const url = `${NEWSDATA_API_URL}/news?apikey=${NEWSDATA_API_KEY}&language=en&category=technology,business&q=cryptocurrency`;
    console.log("Fetching from:", url);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }

    const data = await response.json();
    console.log("Raw news data count:", data.results?.length || 0);

    // Filter for crypto-related news and limit to top 5
    const cryptoKeywords = [
      "crypto",
      "bitcoin",
      "ethereum",
      "blockchain",
      "cryptocurrency",
      "defi",
      "nft",
      "web3",
      "binance",
      "coinbase",
      "cryptocurrencies",
    ];

    const filteredNews = data.results
      .filter((article: any) => {
        const title = article.title.toLowerCase();
        const description = article.description?.toLowerCase() || "";
        const isCryptoRelated = cryptoKeywords.some(
          (keyword) => title.includes(keyword) || description.includes(keyword)
        );
        console.log("Article:", title, "Crypto related:", isCryptoRelated);
        return isCryptoRelated;
      })
      .slice(0, 5)
      .map((article: any) => ({
        id: article.article_id,
        title: article.title,
        description: article.description,
        url: article.link,
        publishedAt: article.pubDate,
        source: article.source_id,
      }));

    console.log("Filtered news count:", filteredNews.length);
    return NextResponse.json(filteredNews);
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
