const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({
  authorId: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Card', CardSchema)