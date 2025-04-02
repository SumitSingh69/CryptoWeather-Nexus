import { NextResponse } from "next/server";

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cities = searchParams.get("cities")?.split(",") || [];

  if (!OPENWEATHER_API_KEY) {
    console.error("OpenWeather API key is missing");
    return NextResponse.json(
      { error: "OpenWeather API key not configured" },
      { status: 500 }
    );
  }

  if (cities.length === 0) {
    return NextResponse.json({ error: "No cities provided" }, { status: 400 });
  }

  try {
    console.log("Fetching weather for cities:", cities);
    const weatherPromises = cities.map(async (city) => {
      const response = await fetch(
        `${BASE_URL}/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error(`Weather API error for ${city}:`, errorData);
        throw new Error(
          `Failed to fetch weather for ${city}: ${
            errorData.message || response.statusText
          }`
        );
      }

      const data = await response.json();
      return {
        city: data.name,
        temperature: Math.round(data.main.temp),
        humidity: data.main.humidity,
        conditions: data.weather[0].description,
      };
    });

    const results = await Promise.all(weatherPromises);
    console.log("Weather data fetched successfully:", results);
    return NextResponse.json(results);
  } catch (error) {
    console.error("Weather API Error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to fetch weather data",
      },
      { status: 500 }
    );
  }
}
