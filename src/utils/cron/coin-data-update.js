const cron = require('node-cron');
const axios = require('axios');
const {CryptoModel} = require('../../models/index'); 

const fetchCryptoData = async () => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
          params: {
            ids: 'bitcoin,ethereum,matic-network',
            vs_currencies: 'usd',
            include_market_cap: 'true',
            include_24hr_change: 'true'
          }
        });

        const coins = response.data;

        const coinAdds = Object.entries(coins).map(async ([coin, coinData]) => {
            await CryptoModel.create({
              coin: coin,                           
              price: coinData.usd,                  
              marketCap: coinData.usd_market_cap,   
              change24h: coinData.usd_24h_change, 
            });
        });

        await Promise.all(coinAdds);
        console.log('Cryptocurrency data added successfully!\nCron completed successfully!\n');
    } catch (error) {
        console.error('Error adding cryptocurrency data:', error.message);
    }
};

// Schedule the cron job to run every 2 hours
cron.schedule('0 */2 * * *', async () => {
    console.log('Fetching and adding cryptocurrency data...');
    await fetchCryptoData();
});
