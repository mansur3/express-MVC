// const mongoose = require("mongoose");
const User = require("../model/user.model")
const express = require("express");

const router = express.Router();


//create usern

router.post("", async(req, res) => {
    const item = await User.create(req.body);

    return res.status(201).send({item});
})





router.get("", async(req, res) => {
    const item = await User.find().lean().exec();
    
    return res.status(200).send({item});
})

router.get("/:id", async (req, res) => {
    const item  = await User.findById(req.params.id).lean().exec();

    return res.status(200).send({item});
})


router.patch("/:id", async (req, res) => {
    const item = await User.findByIdAndUpdate(req.params.id, req.body, {new : true});

    return res.status(200).send({item});
})


router.delete("/:id", async (req, res) => {
    const item = await User.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send({item});
})

module.exports = router;