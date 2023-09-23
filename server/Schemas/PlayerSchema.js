const mongoose = require("mongoose");
const playerSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  username: String,
  level: Number,
  highscore: Number,
});


module.exports = mongoose.model('Player' ,playerSchema)