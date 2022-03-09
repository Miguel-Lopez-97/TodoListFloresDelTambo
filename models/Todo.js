const mongoose = require("mongoose");

/* Defines the structure of our document*/
const TodoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
    erased: Boolean,
    category: String
});

module.exports = mongoose.model("Todo", TodoSchema)