# CryptoWeather Nexus

A modern dashboard combining weather data, cryptocurrency information, and real-time notifications via WebSocket.

## Features

- Real-time weather data for multiple cities
- Live cryptocurrency prices and market data
- Crypto-related news feed
- WebSocket integration for real-time price updates
- Detailed views for both weather and cryptocurrency data
- Responsive design with Tailwind CSS
- State management with Redux Toolkit

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- API keys for:
  - OpenWeatherMap (https://openweathermap.org/api)
  - NewsData.io (https://newsdata.io/)

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/crypto-weather-nexus.git
   cd crypto-weather-nexus
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your API keys:

   ```
   OPENWEATHER_API_KEY=your_openweather_api_key_here
   NEWSDATA_API_KEY=your_newsdata_api_key_here
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard page
│   ├── weather/          # Weather pages
│   └── crypto/           # Crypto pages
├── components/           # React components
│   ├── layout/          # Layout components
│   ├── weather/         # Weather components
│   ├── crypto/          # Crypto components
│   └── news/            # News components
├── store/               # Redux store
│   ├── slices/         # Redux slices
│   └── services/       # Redux services
├── types/              # TypeScript types
└── utils/              # Utility functions
```

## Technologies Used

- Next.js 13+ with App Router
- React 18
- Redux Toolkit
- Tailwind CSS
- TypeScript
- Recharts
- WebSocket
- Axios

## API Integrations

- OpenWeatherMap API for weather data
- CoinGecko API for cryptocurrency data
- NewsData.io for crypto-related news
- CoinCap WebSocket for real-time price updates

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
