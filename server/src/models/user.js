const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        trim: true
    },
    password:{
        type:String,
        required:true,
        minLength:5
    },
    token:{
        type:String,
    }, 
    isAdmin:{
        type:Boolean,
        default:false
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;