const mongoose = require('mongoose');

const ItemsListSchema = new mongoose.Schema({

  id: {
    type: Long,
    require: true,
    unique: true,
  },

  tableID: {
    type: Long,
    require: true,
  },

  quantity: {
    type: Double,
    default: 0.0
  },

  totalPrice: {
    type: Double,
    default: 0.0
  },

  isDeleted: {
    type: Boolean,
    default: false
  }
});


module.exports = mongoose.model('ItemsList', ItemsListSchema);
