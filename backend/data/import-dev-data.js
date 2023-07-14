const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config()
const Data = require('./../models/dataModel');

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('DB connection successful!');
            console.log('listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error);
    });

const years = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'));

const importData = async () => {
    try {
        await Data.create(years);
        console.log('Data succesfully loaded!');
    }
    catch (err) {
        console.log(err);
    }
    process.exit();
}
if (process.argv[2] === '--import') {
    importData();
}