const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({
    roll_id : {type : String, required : true},
    current_batch : {type : String, required: true},
    user : {type: mongoose.Schema.Types.ObjectId, ref : "user", required : true}
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;