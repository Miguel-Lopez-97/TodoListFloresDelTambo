const express = require("express");
const mongoose = require("moongose")

const PORT = 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes");

moongose.connect("mongodb://localhost/todolist")
    .then(() => console.log("Connected successfully"))
    .catch((err) => console.log(err));

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
    console.log("The server is listening on port" + PORT);
});