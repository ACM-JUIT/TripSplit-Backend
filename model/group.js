const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        min:6
    },
    location:{
        type:String,
        required:false,
        max:255,
    },
    Amount:{
        type:String,
        required:false,
    },
    members:{
        type:Array,
        required:true
    },
    admin:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model('Group',groupSchema);