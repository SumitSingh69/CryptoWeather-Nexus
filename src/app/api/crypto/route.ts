import { NextResponse } from "next/server";

const COINGECKO_API_URL = "https://api.coingecko.com/api/v3";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ids = searchParams.get("ids")?.split(",") || [];

  try {
    const response = await fetch(
      `${COINGECKO_API_URL}/coins/markets?vs_currency=usd&ids=${ids.join(
        ","
      )}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch crypto data");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Crypto API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch cryptocurrency data" },
      { status: 500 }
    );
  }
}
