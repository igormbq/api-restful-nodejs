const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
  deal: String,
  value: Number,
  date: Date,
  }
);

module.exports = mongoose.model('Deal', schema);