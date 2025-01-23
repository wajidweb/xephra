const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  game: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // Store the file path or URL
  prizePool: { type: Number, required: true },
  rules: { type: String, required: true },
  registeredUsers: { type: Array, default: [] }
},{ timestamps: true, strict: false });

module.exports = mongoose.model("Event", EventSchema);
