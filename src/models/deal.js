const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
  deal: {
    type: String,
    required: true,
  }
});


module.exports = mongoose.model('Deal', schema);