# Cryptocurrency Tracker API

This project is a server-side application built with Node.js and MongoDB to fetch cryptocurrency data (Bitcoin, Ethereum, and Matic) from the CoinGecko API. The fetched data is stored in MongoDB and exposed via APIs. Additionally, a cron job fetches the cryptocurrency data every 2 hours.

## Features

- **Background Job**: A cron job runs every 2 hours to fetch and store the latest price, market cap, and 24-hour change for Bitcoin, Ethereum, and Matic.
- **API Endpoints**:
  - `/stats`: Fetch the latest data for a requested cryptocurrency.
  - `/deviation`: Fetch the standard deviation of the cryptocurrency's price for the last 100 records stored in the database.


1. Clone the repository:
   git clone https://github.com/your-username/crypto-tracker.git
2. go to root folder of your repository
3. RUN `npm install`
4. Create .env file with the following environment
    - mongodb_url="YOUR_MONGODB_URL"
    - PORT=6901
5. RUN `npm run dev`