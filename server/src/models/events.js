const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  event_image:{
    data:Buffer,
    contentType: String
  }
 
});

const Event = mongoose.model("event", eventSchema);

module.exports = Event