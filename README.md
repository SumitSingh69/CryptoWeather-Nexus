# CryptoWeather Nexus

A modern, real-time dashboard that combines global weather data, cryptocurrency prices, and crypto news in one elegant interface.

![CryptoWeather Nexus](https://via.placeholder.com/1200x630/3b82f6/FFFFFF?text=CryptoWeather+Nexus)

## 📋 Overview

CryptoWeather Nexus is a comprehensive dashboard application that provides users with real-time weather information, cryptocurrency prices with WebSocket updates, and the latest crypto news. The application features a sleek, professional design with a focus on usability and real-time data visualization.

## ✨ Features

- **Real-time Weather Data**: View current weather conditions for multiple cities worldwide
- **Live Cryptocurrency Tracking**: Monitor cryptocurrency prices with real-time WebSocket updates
- **Crypto News Feed**: Stay informed with the latest cryptocurrency news and market trends
- **Responsive Design**: Optimized for all device sizes from mobile to desktop
- **Dark/Light Mode**: Automatic theme switching based on system preferences
- **Favorites System**: Mark cities and cryptocurrencies as favorites for quick access
- **Detailed Views**: Explore in-depth data for individual cryptocurrencies and cities

## 🛠️ Tech Stack

- **Frontend**: React 18, Next.js 15
- **Styling**: Tailwind CSS with custom design system
- **State Management**: Redux Toolkit
- **Real-time Updates**: WebSocket integration
- **API Integration**: REST APIs with Next.js API routes
- **TypeScript**: Type-safe development
- **Deployment**: Ready for deployment on Vercel, Netlify, or AWS Amplify

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn
- API keys for:
  - [OpenWeatherMap](https://openweathermap.org/api) (free tier available)
  - [NewsData.io](https://newsdata.io/) (free tier available)

### Installation

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

### Production Deployment

To build and start the application for production:

```bash
npm run build
npm run start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app directory (App Router)
│   ├── api/                # API routes
│   │   ├── crypto/         # Cryptocurrency API routes
│   │   ├── news/           # News API routes
│   │   └── weather/        # Weather API routes
│   ├── dashboard/          # Dashboard page
│   ├── crypto/             # Crypto pages
│   │   └── [id]/           # Crypto detail page
│   ├── weather/            # Weather pages
│   │   └── [city]/         # Weather detail page
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── crypto/             # Crypto-related components
│   ├── layout/             # Layout components
│   ├── news/               # News-related components
│   ├── weather/            # Weather-related components
│   └── Navbar.tsx          # Navigation component
├── store/                  # Redux store
│   ├── slices/             # Redux slices
│   └── provider.tsx        # Redux provider
├── utils/                  # Utility functions
│   └── websocket.ts        # WebSocket service
└── globals.css             # Global CSS and design tokens
```

## 🎨 Design Decisions

### UI/UX Philosophy

The design of CryptoWeather Nexus follows these key principles:

1. **Clean and Professional**: Minimalist design with careful attention to typography, spacing, and visual hierarchy.

2. **Data-Focused**: Prioritizing the presentation of data with clear visual indicators for changes and statuses.

3. **Consistency**: A unified design language across all sections with consistent card components, status indicators, and interaction patterns.

4. **Accessibility**: High contrast ratios, readable font sizes, and semantic HTML to ensure accessibility.

5. **Responsive**: Fluid layouts that adapt to different screen sizes without compromising on information density.

### Color System

The application uses a carefully selected color palette:

- **Primary Colors**: Blue (#3b82f6) for primary actions and branding
- **Secondary Colors**: Light blue (#0ea5e9) for secondary elements
- **Accent Colors**: Amber (#f59e0b) for highlighting important information
- **Semantic Colors**: Green (#10b981) for positive values, Red (#ef4444) for negative values
- **Neutral Colors**: Various shades of gray for text and backgrounds
- **Dark Mode**: A darker palette that maintains the same color relationships but reduces eye strain

### Component Design

1. **Card System**: All data is presented in consistent card components with:

   - Clear headers
   - Structured content
   - Hover states
   - Interactive elements

2. **Status Indicators**: Visual indicators show the status of connections and data:

   - WebSocket connection status
   - Data freshness
   - Positive/negative changes

3. **Loading States**: Sophisticated loading states with shimmer effects instead of traditional spinners.

4. **Responsive Adjustments**: Components adapt to different screen sizes while maintaining visual coherence.

### State Management Architecture

The application uses Redux Toolkit for state management with a slice-based architecture:

1. **Slices**: Separate slices for weather, crypto, and news data
2. **Asynchronous Operations**: Using `createAsyncThunk` for API calls
3. **WebSocket Integration**: Real-time updates integrated with the Redux store
4. **Persistence**: Selected data (like favorites) persists between sessions

### API Integration Strategy

1. **Next.js API Routes**: Server-side API routes to protect API keys and transform data
2. **Error Handling**: Comprehensive error handling at all levels
3. **Data Transformation**: APIs return only the necessary data in a consistent format
4. **Caching**: Strategic implementation of caching for improved performance

## 🌐 API Integrations

### OpenWeatherMap

- Used for fetching current weather data for cities
- Implemented with error handling and fallbacks
- Data transformed to a consistent format

### CoinGecko API

- Used for cryptocurrency market data
- Detailed information for individual cryptocurrencies
- Historical price data for charts

### NewsData.io

- Used for fetching latest cryptocurrency news
- Articles filtered by relevance and recency
- Enhanced with readable timestamps

### CoinCap WebSocket

- Real-time cryptocurrency price updates
- Automatic reconnection handling
- Status indicators for connection state

## 📝 Future Enhancements

1. **User Authentication**: Add user accounts to save preferences
2. **Additional Data Sources**: Integrate more APIs for comprehensive data
3. **Advanced Charting**: Add more detailed charts and visualizations
4. **Push Notifications**: Alert users to significant price movements
5. **Mobile App**: Develop companion mobile applications with React Native

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenWeatherMap](https://openweathermap.org/)
- [CoinGecko](https://www.coingecko.com/)
- [NewsData.io](https://newsdata.io/)
- [CoinCap](https://coincap.io/)
