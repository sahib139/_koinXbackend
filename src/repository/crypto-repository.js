const CrudRepository = require("./crud-repository");
const {CryptoModel} = require("../models/index");

class CryptoRepository extends CrudRepository{
    constructor(){
        super(CryptoModel);
    }

    async getCoinLatestData(name){
        try {
            const response = await CryptoModel.find({
                coin: name,
            }).sort({timestamp:-1}).limit(1);;
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }

    }

    async getCoinAllLatestData(name){
        try {
            const response = await CryptoModel.find({
                coin: name,
            }).sort({timestamp:-1}).limit(100);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = CryptoRepository;