
const mongoose = require("mongoose");

function connect(){
    mongoose.connect("mongodb://0.0.0.0/KhataBook")
    .then(()=>{
        console.log("db connected successfully");
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = connect;