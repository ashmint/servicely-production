const Customer = require("../models/Customer");
const Vehicle = require("../models/Vehicle");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const vehicles = await Vehicle.find({ owner: req.params.id });
      const user = await Customer.findById({_id: req.params.id})
      res.render("customer.ejs", { vehicles: vehicles, user: user , workshop: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createVehicle: async (req, res) => {
    try {
      // Upload image to cloudinary
      await Vehicle.create({
        manufacturer: req.body.manufacturer,
        model: req.body.model,
        makeYear: req.body.makeYear,
        vinNumber: req.body.vinNumber,
        numberPlate: req.body.numberPlate,
        owner: req.params.id,
      });
      console.log("Post has been added!");
      res.redirect(`/user/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
}