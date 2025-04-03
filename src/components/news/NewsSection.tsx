import { NewspaperIcon } from "@heroicons/react/24/outline";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: string;
}

interface NewsSectionProps {
  data: NewsItem[];
  loading: boolean;
}

// Format date to a more readable format
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default function NewsSection({ data, loading }: NewsSectionProps) {
  if (loading) {
    return (
      <div className="card">
        <div className="card-header">
          <h2 className="section-title">Latest Crypto News</h2>
        </div>
        <div className="p-6 space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="shimmer h-32 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="card">
        <div className="card-header">
          <h2 className="section-title">Latest Crypto News</h2>
        </div>
        <div className="p-8 text-center opacity-60">
          <NewspaperIcon className="w-12 h-12 mx-auto mb-3 opacity-40" />
          <p>No crypto news available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="section-title">Latest Crypto News</h2>
      </div>
      <div className="divide-y divide-[var(--card-border)]">
        {data.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-5 hover:bg-[var(--input-bg)] transition-colors"
          >
            <h3 className="font-semibold text-lg mb-2 line-clamp-2">
              {item.title}
            </h3>
            <p className="text-sm opacity-80 mb-3 line-clamp-2">
              {item.description}
            </p>
            <div className="flex items-center justify-between text-xs opacity-60">
              <span>{item.source}</span>
              <span>{formatDate(item.publishedAt)}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
