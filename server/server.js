const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config();

// Rest Object
const app = express();


connectDB()

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes

app.use("/api/v1",require("./routes/user.routes.js"))

app.get('/',(req,res)  => {
    res.status(200).json({
        success: true
    })
})


// PORT
const port = process.env.PORT;

app.listen(port,() => {
    console.log(`Server is running on port ${port}`.bgGreen.white.bold);
})

