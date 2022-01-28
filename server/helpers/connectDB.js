const mongoose = require("mongoose");

//dotenv config
require("dotenv").config();

//main app

const connectDB = () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(
    MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => (err ? console.log(err) : console.log("Database connected"))
  );
};

module.exports = connectDB;
