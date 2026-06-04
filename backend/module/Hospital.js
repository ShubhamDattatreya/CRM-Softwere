const mongoose = require("mongoose");

const HospitalSchema = new mongoose.Schema(
  {
    adminId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "userModel", 
      index: true, 
      default: null 
    },

    name: { type: String, required: true },
    city: { type: String, required: true },
    hospitalLogo: { type: String, required: true },
    hospitalCode: { type: String, required: true },
    contactPerson: { type: String, required: true },
    email: { type: String, required: true },
    isPrimary: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
);
  
const Hospital = mongoose.model("hospital", HospitalSchema);
module.exports = Hospital;