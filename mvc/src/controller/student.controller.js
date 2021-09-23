const express = require("express");

const router = express.Router();

const Student = require("../model/student.model");
const crud = require("./crudController");

router.post("", crud.post(Student));
router.get("", crud.get(Student));
router.get("/:id", crud.getOne(Student));
router.patch("/:id", crud.update(Student));
router.delete("/:id", crud.remove(Student));




module.exports = router;
