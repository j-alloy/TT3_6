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

// Define user model
const User = mongoose.model('User', userSchema);

export default User;