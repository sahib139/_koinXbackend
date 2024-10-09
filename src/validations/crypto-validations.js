const {responseHandler} = require("../common/reponseHandllers");

const cryptoValidation = (req,res,next)=>{
    try {
        const coin = req.query.coin;
        if(!coin){
            return responseHandler.badRequestResponse({res,message:"No coin query params"});
        }
        return next();
    } catch (error) {
        
    }
}

module.exports = cryptoValidation;