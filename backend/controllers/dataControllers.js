const Data = require('./../models/dataModel');
//get all data
const getAllData = async (req, res) => {
    const stats = await Data.find({});
    return res.status(200).json(stats)
}
module.exports = { getAllData };