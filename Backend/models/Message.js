const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  chatGroupId: {
    type: mongoose.Schema.Types.ObjectId, // Store as ObjectId
    ref: "ChatGroup", 
    required: true,
  },
  senderId: {
    type: String,
    ref: "User", // Reference to User
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  time: {
    weekday: { type: String, required: true }, // Ensure weekday name is stored
    hour: { type: Number, required: true },
    minute: { type: Number, required: true },
  },
});

const MessageModel = mongoose.model("Message", MessageSchema);

module.exports = MessageModel;
