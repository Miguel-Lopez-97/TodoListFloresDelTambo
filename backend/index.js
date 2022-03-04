const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 27017;
const app = express();

const todoRoutes = require("./routes/todoRoutes");


app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost/todolist")
    .then(() => console.log("Connected successfully"))
    .catch((err) => console.error(err));

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
    console.log("The server is listening on port " + PORT);
});