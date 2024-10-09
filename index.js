const express = require('express');
const bodyParser = require('body-parser');
const {databaseConnection} = require('./src/config/database-config');

require('dotenv').config();

const PORT = process.env.PORT || 6900;
const app = express();

app.use(express.json());

app.listen(PORT,async ()=>{
    console.log(`Server is running on port ${PORT}`);
    await databaseConnection();
})