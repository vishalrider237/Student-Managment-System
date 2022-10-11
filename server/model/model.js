const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    class:{
        type : String,
        required: true
    },
    regNo:{
        type : String,
        required: true,
        unique:true
    },
    phno:{
        type : String,
        required: true,
        unique:true
    },
    
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;