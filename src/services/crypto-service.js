const {CryptoRepository} = require("../repository/index");

class CryptoService{
    constructor(){
        this.repository = new CryptoRepository();
    }

    async getStats(coin){
        try {
            const coinDetail = await this.repository.getCoinLatestData(coin);
            return {
                marketCap: coinDetail[0].marketCap,
                price: coinDetail[0].price,
                change24h: coinDetail[0].change24h,
            }
        } catch (error) {
            throw error;    
        }        
    }

    async getDeviation(coin){
        try {
            const coinDetails = await this.repository.getCoinAllLatestData(coin);
            
            const prices = coinDetails.map(record => record.price);
            const mean = prices.reduce((acc, price) => acc + price, 0) / prices.length;
            const variance = prices.reduce((acc, price) => acc + Math.pow(price - mean, 2), 0) / prices.length;
            const standardDeviation = Math.sqrt(variance);

            return { 
                deviation: standardDeviation 
            };
        } catch (error) {
            throw error;
        }
    }
    
}

module.exports =new CryptoService();