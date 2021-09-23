const express = require("express");

const router = express.Router();

const Topic = require("../model/topic.model");
const crud = require("./crudController");

router.post("", crud.post(Topic));
router.get("", crud.get(Topic));
router.get("/:id", crud.getOne(Topic));
router.patch("/:id", crud.update(Topic));
router.delete("/:id", crud.remove(Topic));

module.exports = router;
