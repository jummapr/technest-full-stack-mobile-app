const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

dotenv.config();

const dbUrl= process.env.MONGO_URI ;
console.log(dbUrl);

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl).then((data) => {
            console.log(`Database connected with ${data.connection.host}`.bgCyan.white.bold);
        });
    } catch (error) {
        console.log(`${error.message}`.bgRed.white.bold);
        setTimeout(connectDB, 5000)
    }
};

module.exports = connectDB;
