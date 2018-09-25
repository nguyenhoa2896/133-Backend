const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({


  firstName: {
    type: String,
    default: ''
  },

  lastName: {
    type: String,
    default: ''
  },

  dateOfBirth: {
    type: Date,
  },

  address: {
    type: String,
    default: ''
  },

  email: {
    type: String,
    default: ''
  },

  password: {
    type: String,
    default: ''
  },

  isDeleted: {
    type: Boolean,
    default: false
  }
});

UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

UserSchema.methods.validatePassoword = function(password) {
  return bcrypt.compareSync(passoword, this.password);
}
module.exports = mongoose.model('User', UserSchema);
