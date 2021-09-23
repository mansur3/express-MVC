const express = require("express");

const router = express.Router();

const Result = require("../model/result.model");
const Evaluation = require("../model/evaluation.model");
const crud = require("./crudController");
// const { route } = require("./user.controller");
router.get("/one", async (req, res) => {
    const item = await Result.find({}).limit(1).sort({result: -1}).populate("student").populate("evaluation").lean().exec();
    return res.status(200).send({item})
})

router.post("", crud.post(Result));
router.get("", crud.get(Result));
router.get("/:id", crud.getOne(Result));
router.patch("/:id", crud.update(Result));
router.delete("/:id", crud.remove(Result));


//fetch all students who gave a particular evaluation

router.get("/evaluation/:id", async(req, res) => {
    
    const item = await Result.find({evaluation : req.params.id}).populate("student").populate("evaluation").find().lean().exec();

    return res.status(200).send({item})
})





module.exports = router;
