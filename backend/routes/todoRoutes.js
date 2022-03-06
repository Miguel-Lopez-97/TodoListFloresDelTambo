//Router allows us to enter to express and mongo collection (Todo)
const router = require("express").Router();
const Todo = require("../models/Todo");

/* request and response, https format / get method gets the info from the collection , Json format */ 
router.get("/", (req, res) => {   
    Todo.find((err, result) => {    
        if(err) throw new Error(err);   
        res.json(result);
    });
});

/* Creates a new document */
router.post("/", (req, res) => {
    Todo.create(req.body, (err,result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
});

/* finds and update the info from the body(cards) */
router.put("/:id", (req, res) => {
    Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
});


/* deletes a single document from the database AND body*/
router.delete("/:id", (req, res) => {
    Todo.findOneAndRemove({_id: req.params.id}, (err,result) =>{
        if(err) throw new Error(err);
        res.json(result);
    });
});

module.exports = router;
