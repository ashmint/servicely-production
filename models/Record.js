const mongoose = require("mongoose");

const RecordSchema = new mongoose.Schema({
  serviceType: {
    type: String,
    required: true,
  },
  partsReplaced: {
    type: String,
    required: false,
  },
  technician: {
    type: String,
    required: true,
  },
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
  },

  description: {
    type: String,
    required:false,
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
 
});

module.exports = mongoose.model("Record", RecordSchema);