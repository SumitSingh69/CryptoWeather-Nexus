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

// Function to format the date in a more readable way
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    const hours = Math.floor(diffTime / (1000 * 60 * 60));
    if (hours === 0) {
      const minutes = Math.floor(diffTime / (1000 * 60));
      return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    }
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (diffDays === 1) {
    return "Yesterday";
  } else if (diffDays < 7) {
    return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
  } else {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: date.getFullYear() !== now.getFullYear() ? "numeric" : undefined,
    });
  }
};

export default function NewsSection({ data, loading }: NewsSectionProps) {
  if (loading) {
    return (
      <div className="card">
        <div className="card-header">
          <h2 className="section-title">Latest News</h2>
        </div>
        <div className="p-6 space-y-5">
          {[1, 2, 3, 4, 5].map((i) => (
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
          <h2 className="section-title">Latest News</h2>
        </div>
        <div className="p-8 text-center opacity-60">
          <NewspaperIcon className="w-12 h-12 mx-auto mb-3 opacity-40" />
          <p>No news data available. Please check your API configuration.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="section-title">Latest News</h2>
      </div>
      <div className="divide-y divide-[var(--card-border)]">
        {data.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="news-card p-5 block hover:bg-[var(--input-bg)] transition-colors"
          >
            <h3 className="news-title text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
              {item.title}
            </h3>

            {item.description && (
              <p className="text-sm opacity-70 mt-2 line-clamp-2">
                {item.description}
              </p>
            )}

            <div className="flex items-center justify-between mt-3">
              <span className="px-2 py-1 text-xs bg-[var(--input-bg)] rounded-full">
                {item.source}
              </span>
              <span className="text-xs opacity-60">
                {formatDate(item.publishedAt)}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
