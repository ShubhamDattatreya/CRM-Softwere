const mongoose = require("mongoose");

// User Schema
const Login = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ["SuperAdmin", "admin", "SuperAuditor"],
    default: "SuperAdmin"
  },
}, { timestamps: true });



// Models
module.exports = mongoose.model("User", Login);



