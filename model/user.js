const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        min:6
    },
    email:{
        type:String,
        required:true,
        max:255,
        min:6
    },
    password:{
        type:String,
        required:true,
        max:1024,
        min:6
    },
    image:{
        type:String,
        required:false,
        max:255,
    },
    Amount:{
        type:Array,
        required:false,
    },
    groups:{
        type:Array,
        required:false
    }
})

module.exports = mongoose.model('User',userSchema);