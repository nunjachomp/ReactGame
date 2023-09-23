const mongoose = require("mongoose");
const playerSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String },
  username: { type: String, required: true },
  fullName: { type: String, required: true },
  Picture : { type: String, required: true } ,
  locale : String,
  level: Number,
  highscore: Number,
  EntryDate: { type: Date, default: Date.now },
  CreatedAt: {type: Date, immutable:true , default:Date.now }
});


module.exports = mongoose.model('Player' ,playerSchema)