const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    userGain: {
        type: Number,
        required: true,
    },
    userLost: {
        type: Number,
        required: true,
    },
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
