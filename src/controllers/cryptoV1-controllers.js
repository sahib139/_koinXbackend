const CryptoService = require("../services/crypto-service");
const {responseHandler} = require("../common/reponseHandllers");

class CryptoController {

    async getStats(req,res){
        try {
            const coin = req.query.coin;
            const stats = await CryptoService.getStats(coin);
            return responseHandler.successResponse({res,message:"success",data:stats});
        } catch (error) {
            return responseHandler.serverErrorResponse({res,message:"Unable to get stats",data:null,err:error});
        }
    }

    async getDeviation(req,res){
        try {
            const coin = req.query.coin;
            const deviation = await CryptoService.getDeviation(coin);
            return responseHandler.successResponse({res,message:"success",data:deviation});
        } catch (error) {
            return responseHandler.serverErrorResponse({res,message:"Unable to get deviation",data:null,err:error});
        }
    }
}

module.exports = new CryptoController();