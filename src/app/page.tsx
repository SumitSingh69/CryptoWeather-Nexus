import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="page-header">CryptoWeather Nexus</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto opacity-80 mb-8">
          Your comprehensive dashboard for real-time cryptocurrency prices,
          global weather updates, and the latest crypto news - all in one place.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/dashboard"
            className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-6 py-3 rounded-lg font-medium transition-all"
          >
            Open Dashboard
          </Link>
          <Link
            href="/crypto"
            className="bg-[var(--card-bg)] border border-[var(--card-border)] px-6 py-3 rounded-lg font-medium hover:border-[var(--primary)] transition-all"
          >
            View Cryptocurrencies
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="w-full max-w-5xl mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card p-6">
            <div className="mb-4 text-[var(--primary)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Real-time Weather Data</h3>
            <p className="opacity-70">
              Access accurate weather information for major cities worldwide,
              updated in real-time from trusted meteorological sources.
            </p>
          </div>

          <div className="card p-6">
            <div className="mb-4 text-[var(--primary)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                <path
                  fillRule="evenodd"
                  d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875h-17.25c-1.036 0-1.875-.84-1.875-1.875v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                  clipRule="evenodd"
                />
                <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Cryptocurrency Tracking</h3>
            <p className="opacity-70">
              Monitor cryptocurrency prices with WebSocket connections for
              real-time updates on Bitcoin, Ethereum, and other major
              cryptocurrencies.
            </p>
          </div>

          <div className="card p-6">
            <div className="mb-4 text-[var(--primary)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z"
                  clipRule="evenodd"
                />
                <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Latest Crypto News</h3>
            <p className="opacity-70">
              Stay informed with the latest cryptocurrency news and market
              trends from reliable sources, updated throughout the day.
            </p>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Powered By</h2>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <div className="px-4 py-2 text-sm border border-[var(--card-border)] rounded-full">
            Next.js 14
          </div>
          <div className="px-4 py-2 text-sm border border-[var(--card-border)] rounded-full">
            React 18
          </div>
          <div className="px-4 py-2 text-sm border border-[var(--card-border)] rounded-full">
            TypeScript
          </div>
          <div className="px-4 py-2 text-sm border border-[var(--card-border)] rounded-full">
            Redux Toolkit
          </div>
          <div className="px-4 py-2 text-sm border border-[var(--card-border)] rounded-full">
            Tailwind CSS
          </div>
          <div className="px-4 py-2 text-sm border border-[var(--card-border)] rounded-full">
            WebSockets
          </div>
        </div>
      </div>
    </div>
  );
}
