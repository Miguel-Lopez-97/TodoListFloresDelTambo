const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 27017;
const app = express();

const todoRoutes = require("./routes/todoRoutes");

require('dotenv').config({path: 'variables.env'})
//cors acts as a mediator
app.use(express.json());
app.use(cors());

//connect to the database
mongoose.connect(process.env.DB_URL,{useNewUrlParser:true})
    .then(() => console.log("Connected successfully"))
    .catch((err) => console.error(err));

app.use("/todos", todoRoutes);

//verifies if the server is running
app.listen(PORT,  () => {
    console.log("The server is listening on port " + PORT);
});