const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
  deal: String,
  value: Number,
  date: Date,
  id_bling:  { type: String, index: { unique: true }}
  }
);

module.exports = mongoose.model('Deal', schema);