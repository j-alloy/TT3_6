const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
  EmployeeID: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.export = mongoose.model('User', userSchema);