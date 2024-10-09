const CrudRepository = require("./crud-repository");
const {CryptoModel} = require("../models/index");

class cryptocRepository extends CrudRepository{
    constructor(){
        super(CryptoModel);
    }

    async deleteByCoinName(name){
        try {
            const response = await CryptoModel.findOneAndDelete({
                coin: name,
            });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }

    }
}

module.exports = cryptocRepository;