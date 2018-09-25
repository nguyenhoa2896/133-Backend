const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({

  id: {
    type: Long,
    require: true,
  },

  date: {
    type: Date,
    default: 1/1/2000
  },

  userID: {
    type: Long,
    require: true,
  },

  itemListID: {
    type: Long,
    require: true
  },

  totalPrice: {
    type: Double,
    default: 0.0
  },

  checkOut: {
    type: Boolean,
    default: false
  },

  isDeleted: {
    type: Boolean,
    default: false
  }
});


module.exports = mongoose.model('Carts', CartsSchema);
