const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    Paidby:{
        type:String,
        required: true,
        min:6
    },
    Amount:{
        type:Number,
        required:false,
        default:0
    },
    
})


module.exports = mongoose.model('Expense',expenseSchema);