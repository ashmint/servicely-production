const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  makeYear: {
    type: String,
    required: true,
  },
  vinNumber: {
    type: String,
    required: true,
  },
  numberPlate: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Vehicle", VehicleSchema);