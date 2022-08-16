const mongoose = require('mongoose');


const volunteeringSchema = new mongoose.Schema({
    name:{
        type: String,
        
    },
    email:{
        type: String,
    },
    date:{
        type:Date,
        default: Date.now
    },
    description:{
        type:String
    },
    events:{
        type:String
    },
    user:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:'User'
    },
    event_image:{
        data: Buffer,
        contentType: String
    }

})

const volunteering = mongoose.model('volunteering', volunteeringSchema)

module.exports = volunteering