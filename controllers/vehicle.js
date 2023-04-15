const Customer = require("../models/Customer");
const Vehicle = require("../models/Vehicle");
const Record = require("../models/Record");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const records = await Record.find({ vehicle: req.params.id });
      const vehicle = await Vehicle.findById({ _id: req.params.id});
      console.log(vehicle)
      let customerId = vehicle.owner;
      const user = await Customer.findById({_id: customerId})
      console.log(user)
      res.render("vehicle.ejs", { vehicle: vehicle, user: user, records:records, workshop:req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createRecord: async (req, res) => {
    try {
      console.log(req.params)
      // Upload image to cloudinary
      await Record.create({
        serviceType: req.body.serviceType,
        partsReplaced: req.body.partsReplaced,
        technician: req.body.technician,
        vehicle: req.params.id,
        description: req.body.description,
      });
      console.log("Post has been added!");
      res.redirect(`/vehicle/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
}