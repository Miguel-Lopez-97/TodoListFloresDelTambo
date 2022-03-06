const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 27017;
const app = express();

const todoRoutes = require("./routes/todoRoutes");

//cors acts as a mediator
app.use(express.json());
app.use(cors());

//connect to the database
mongoose.connect("mongodb://localhost/todolist")
    .then(() => console.log("Connected successfully"))
    .catch((err) => console.error(err));

app.use("/todos", todoRoutes);

//verifies if the server is running
app.listen(PORT, () => {
    console.log("The server is listening on port " + PORT);
});