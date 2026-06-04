const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  mobile: String,
  category: String,
  comment: String,
  ForgotPassword: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ["pending", "blocked",], 
    default: "pending"
  },
  role: {
    type: String,
    enum: ["Admin", "SuperAuditor, ChiefXofficer"],
    default: "Admin"
  }
  

}, { timestamps: true });

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin