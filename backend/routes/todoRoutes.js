const router = require("express").Router();
const Todo = require("../models/Todo");

router.get("/", (req, res) => {   
    Todo.find((err, result) => {
        if(err) throw new Error(err);
        console.log(result);
    });
});


router.post("/new", (req, res) => {
    Todo.create(req.body, (err,result) => {
        if(err) throw new Error(err);
        console.log(result);
    });
});

router.delete("/:id", (req.res) => {
    Todo.findOneAndRemove({_id: req.body.id}, (err,result) =>{
        if(err) throw new Error(err);
        console.log(result);
    });
});

module.exports = router;