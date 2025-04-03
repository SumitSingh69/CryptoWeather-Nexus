import { CloudIcon, StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { toggleFavorite } from "@/store/slices/weatherSlice";

interface WeatherData {
  city: string;
  temperature: number;
  humidity: number;
  conditions: string;
  windSpeed?: number;
  pressure?: number;
  feelsLike?: number;
}

interface WeatherSectionProps {
  data: WeatherData[];
  loading: boolean;
}

// Weather icon mapping based on conditions
const getWeatherIcon = (conditions: string) => {
  const conditionLower = conditions.toLowerCase();

  if (conditionLower.includes("clear") || conditionLower.includes("sun")) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10 text-yellow-400"
      >
        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
      </svg>
    );
  }

  if (conditionLower.includes("cloud")) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10 text-gray-400"
      >
        <path
          fillRule="evenodd"
          d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (conditionLower.includes("rain") || conditionLower.includes("drizzle")) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10 text-blue-500"
      >
        <path
          fillRule="evenodd"
          d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (conditionLower.includes("snow")) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10 text-blue-200"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-3.376 6.415a.75.75 0 10-1.248-.83A6.001 6.001 0 0012 4.25a.75.75 0 000-1.5 7.501 7.501 0 016.258 11.596.75.75 0 10-1.258-.814 6.001 6.001 0 01-5.101 2.921.75.75 0 000 1.5 7.501 7.501 0 01-6.3-3.286.75.75 0 001.248.832 6.001 6.001 0 005.101 2.921.75.75 0 000-1.5 7.501 7.501 0 01-6.258-11.596c.29.456.603.86.979 1.244.208.211.551.143.764-.068a.75.75 0 01.068-.764 6.001 6.001 0 014.931-2.525.75.75 0 000-1.5 7.501 7.501 0 01-6.258 11.596.75.75 0 10.83 1.248 6.001 6.001 0 003.432 2.414 6.001 6.001 0 002.736.657z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (conditionLower.includes("storm") || conditionLower.includes("thunder")) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10 text-yellow-500"
      >
        <path
          fillRule="evenodd"
          d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  return <CloudIcon className="w-10 h-10 text-blue-400" />;
};

export default function WeatherSection({ data, loading }: WeatherSectionProps) {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.weather.favorites);

  if (loading) {
    return (
      <div className="card">
        <div className="card-header">
          <h2 className="section-title">Weather</h2>
        </div>
        <div className="p-6 space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="shimmer h-24 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="card">
        <div className="card-header">
          <h2 className="section-title">Weather</h2>
        </div>
        <div className="p-8 text-center opacity-60">
          <CloudIcon className="w-12 h-12 mx-auto mb-3 opacity-40" />
          <p>No weather data available. Please check your API configuration.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="section-title">Weather</h2>
      </div>
      <div className="divide-y divide-[var(--card-border)]">
        {data.map((item) => (
          <div
            key={item.city}
            className="weather-card p-5 flex items-center justify-between hover:bg-[var(--input-bg)] transition-colors"
          >
            <div className="flex items-center space-x-4">
              {getWeatherIcon(item.conditions)}
              <div>
                <h3 className="weather-city">{item.city}</h3>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-2xl font-bold">
                    {item.temperature}°C
                  </span>
                  {item.feelsLike && (
                    <span className="text-sm opacity-70">
                      Feels like {item.feelsLike}°C
                    </span>
                  )}
                </div>
                <p className="weather-condition mt-1">{item.conditions}</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <button
                onClick={() => dispatch(toggleFavorite(item.city))}
                className="p-1.5 hover:bg-[var(--card-bg)] rounded-full"
                aria-label={
                  favorites.includes(item.city)
                    ? "Remove from favorites"
                    : "Add to favorites"
                }
              >
                {favorites.includes(item.city) ? (
                  <StarIconSolid className="h-5 w-5 text-yellow-400" />
                ) : (
                  <StarIcon className="h-5 w-5 opacity-40" />
                )}
              </button>

              <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs opacity-70 mt-1">
                <div className="flex items-center gap-1">
                  <span>Humidity:</span>
                  <span className="font-medium">{item.humidity}%</span>
                </div>
                {item.windSpeed && (
                  <div className="flex items-center gap-1">
                    <span>Wind:</span>
                    <span className="font-medium">{item.windSpeed} m/s</span>
                  </div>
                )}
                {item.pressure && (
                  <div className="flex items-center gap-1">
                    <span>Pressure:</span>
                    <span className="font-medium">{item.pressure} hPa</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
