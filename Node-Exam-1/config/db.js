const mongoose = require("mongoose")
require("dotenv").config()

const dbConnect = async () => {
    await mongoose.connect("mongodb://localhost:27017/node-exam")
    console.log("connected to the database");
}

module.exports = dbConnect