require("../config/database");
const mongoose = require("mongoose");


const Employee = mongoose.Schema({
   
    name : String,
    age  : String
});

module.exports = mongoose.model("employee", Employee);