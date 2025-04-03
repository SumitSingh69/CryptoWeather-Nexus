import { CurrencyDollarIcon, StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { toggleFavorite } from "@/store/slices/cryptoSlice";

interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
}

interface CryptoSectionProps {
  data: CryptoData[];
  loading: boolean;
}

// Crypto icon mapping based on coin names
const getCryptoIcon = (id: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    bitcoin: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10 text-yellow-500"
      >
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
    ),
    ethereum: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10 text-purple-600"
      >
        <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
        <path
          fillRule="evenodd"
          d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z"
          clipRule="evenodd"
        />
      </svg>
    ),
    cardano: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10 text-blue-600"
      >
        <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
      </svg>
    ),
  };

  return (
    iconMap[id] || <CurrencyDollarIcon className="w-10 h-10 text-green-500" />
  );
};

export default function CryptoSection({ data, loading }: CryptoSectionProps) {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.crypto.favorites);
  const websocketConnected = useSelector(
    (state: RootState) => state.crypto.websocketConnected
  );

  if (loading) {
    return (
      <div className="card">
        <div className="card-header">
          <h2 className="section-title">Cryptocurrency</h2>
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
          <h2 className="section-title">Cryptocurrency</h2>
        </div>
        <div className="p-8 text-center opacity-60">
          <CurrencyDollarIcon className="w-12 h-12 mx-auto mb-3 opacity-40" />
          <p>
            No cryptocurrency data available. Please check your API
            configuration.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header flex justify-between items-center">
        <h2 className="section-title">Cryptocurrency</h2>
        <div
          className={`status-indicator ${
            websocketConnected ? "status-online" : "status-offline"
          }`}
        >
          {websocketConnected ? "Live updates" : "Updates paused"}
        </div>
      </div>
      <div className="divide-y divide-[var(--card-border)]">
        {data.map((item) => (
          <div
            key={item.id}
            className="crypto-card p-5 flex items-center justify-between hover:bg-[var(--input-bg)] transition-colors"
          >
            <div className="flex items-center space-x-4">
              {getCryptoIcon(item.id)}
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <span className="crypto-symbol">{item.symbol}</span>
                </div>
                <div className="crypto-price">
                  ${item.current_price.toLocaleString()}
                  <span
                    className={`ml-2 text-sm font-medium ${
                      item.price_change_percentage_24h >= 0
                        ? "crypto-positive"
                        : "crypto-negative"
                    }`}
                  >
                    {item.price_change_percentage_24h >= 0 ? "+" : ""}
                    {item.price_change_percentage_24h.toFixed(2)}%
                  </span>
                </div>
                <p className="crypto-marketcap">
                  Market Cap: ${(item.market_cap / 1e9).toFixed(2)}B
                </p>
              </div>
            </div>
            <button
              onClick={() => dispatch(toggleFavorite(item.id))}
              className="p-1.5 hover:bg-[var(--card-bg)] rounded-full"
              aria-label={
                favorites.includes(item.id)
                  ? "Remove from favorites"
                  : "Add to favorites"
              }
            >
              {favorites.includes(item.id) ? (
                <StarIconSolid className="h-5 w-5 text-yellow-400" />
              ) : (
                <StarIcon className="h-5 w-5 opacity-40" />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
