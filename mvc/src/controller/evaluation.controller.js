const express = require("express");

const router = express.Router();

const Evaluation = require("../model/evaluation.model");
const crud = require("./crudController");

router.post("", crud.post(Evaluation));
router.get("", async (req, res) => {
    const item = await Evaluation.find().populate("instructor").populate("topic_name").lean().exec();

    return res.status(200).send({item})
});
router.get("/:id", crud.getOne(Evaluation));
router.patch("/:id", crud.update(Evaluation));
router.delete("/:id", crud.remove(Evaluation));

module.exports = router;
