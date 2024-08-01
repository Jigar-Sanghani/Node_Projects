const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose.connect("mongodb://localhost:27017/node");
  console.log('DB Connection Established ||');
};

module.exports = dbConnect;