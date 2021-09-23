const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
    result : {type : Number, required : true},
    student : {type : mongoose.Schema.Types.ObjectId, ref : "student", required : true},
    evaluation : {type : mongoose.Schema.Types.ObjectId, ref : "evaluation", required : true}
})

const Result = mongoose.model("result", resultSchema);

module.exports = Result;