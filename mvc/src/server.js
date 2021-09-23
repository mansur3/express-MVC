const express = require("express");
const app = express();
const mongoose = require("mongoose");

const connect = require("./config/db");
app.use(express.json());


///User model class

const User = require("./model/user.model");
const Student = require("./model/student.model");
const Topic = require("./model/topic.model");
const Eval = require("./model/evaluation.model");
const Result = require("./model/result.model");



// Controllers 


const userController = require("./controller/user.controller");
const studentController = require("./controller/student.controller");
const topicController = require("./controller/topic.controller");
const resultController = require("./controller/result.controller");
const evaluationController = require("./controller/evaluation.controller");





app.use("/users", userController);
app.use("/students", studentController);
app.use("/topics", topicController);
app.use("/results", resultController);
app.use("/evaluations", evaluationController);


app.listen(1234, async function() {
    await connect();
    console.log("Listening on the port 1234")
})