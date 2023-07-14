const express = require('express');

const { getAllData } = require('./../controllers/dataControllers');

const router = express.Router();
router.get('/', getAllData);
module.exports = router;