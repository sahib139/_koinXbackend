const express = require('express');
const {databaseConnection} = require('./src/config/database-config');
const APIroutes = require("./src/routes/index"); 
require("./src/utils/cron/coin-data-update");

require('dotenv').config();

const PORT = process.env.PORT || 6900;
const app = express();

app.use(express.json());
app.use('/api',APIroutes);

app.listen(PORT,async ()=>{
    console.log(`Server is running on port ${PORT}`);
    await databaseConnection();
})