const mongoose = require('mongoose');

const cryptoSchema = mongoose.Schema({
    coin:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    marketCap:{
        type: Number,
        required: true,
    },
    change24h:{
        type: Number,
        required: true,
    }

},{
    timestamps: true,
});

cryptoSchema.index({ createdAt: 1 });

const Crypto = mongoose.model('crypto',cryptoSchema);

module.exports = Crypto;