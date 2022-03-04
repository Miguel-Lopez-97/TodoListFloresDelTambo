const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
    erased: Boolean
});

module.exports = mongoose.model("Todo", TodoSchema)