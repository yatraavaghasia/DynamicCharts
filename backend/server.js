require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose');

// express app
const app = express()
const chartRoutes = require('./routes/chartRoutes');
// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/charts', chartRoutes);

//connect to DB
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
