const express = require("express");
const router = express.Router();
const cryptoValidation = require("../../validations/crypto-validations");
const cryptoV1Controller = require("../../controllers/cryptoV1-controllers");

router.get("/stats",cryptoValidation,cryptoV1Controller.getStats);
router.get("/deviation",cryptoValidation,cryptoV1Controller.getDeviation);

module.exports=router;