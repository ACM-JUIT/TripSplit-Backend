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
        type:Number,
        required:false,
        default:0
    },
    members:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    
})


module.exports = mongoose.model('Group',groupSchema);