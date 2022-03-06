// Import express, mongoose, config and cors 
const express = require("express");
const mongoose = require("mongoose"); // for creating mongoose model (schema)
const cors = require("cors"); // enable cross origin request
const config = require("./config")
const path = require("path")

// Initialize app
const app = express();

// Import router
const todoRoutes = require("./routes/todoRoutes");

// Mongoose 6 always behaves as if  useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false 
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };

// Initialize express and  cross origin request
app.use(express.json());
app.use(cors());

//Connet to database (second parameter is opional but is used in order to avoid  warnings in the terminal for previous verions)
mongoose.connect(config.URI, connectionOptions)
    // if connection is succesful we want to call app and show a msg in console that it is working
    .then(() => console.log("Connected successfully"))
    // if connection fails, show error msg
    .catch((err) => console.error(err));

app.use("/todos", todoRoutes);

console.log(`NODE_ENV=${config.NODE_ENV}`)

app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(config.PORT, () => {
    console.log(`The server is listening on port: ${config.PORT}`);
});