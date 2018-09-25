const mongoose = require('mongoose');

const ItemsSchema = new mongoose.Schema({

  id: {
    type: Long,
    require: true,
    unique: true,
  },

  name: {
    type: String,
    default: ''
  },

  department: {
    type: String,
    default: 'other'
  },

  category: {
    type: String,
    default: 'other'
  },

  brand: {
    type: String,
    default: ''
  },

  description: {
    type: String,
    default: ''
  },

  oPrice: {
    type: Double,
    default: 0.0
  },

  cPrice: {
    type: Double,
    default: 0.0
  },

  discount: {
    type: Double,
    default: 0.0
  },

  type: {
    type: Boolean,
    default: true
  },

  picture: {
    type: String,
    default: ''
  },

  isDeleted: {
    type: Boolean,
    default: false
  }
});


module.exports = mongoose.model('Items', ItemsSchema);
