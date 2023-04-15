const Customer = require("../models/Customer");
const Vehicle = require("../models/Vehicle");
const Record = require("../models/Record");
const UserModel = require("../models/User")

module.exports = {
  getProfile: async (req, res) => {
    try {
      const record = await Record.findById({ _id: req.params.id });
      const vID = record.vehicle;
      const vehicle = await Vehicle.findById({ _id: vID});
      console.log(vehicle)
      let customerId = vehicle.owner;
      const user = await Customer.findById({_id: customerId})
      let wID = user.workshopName;
      const workshop = await UserModel.findById({_id: wID})  
      console.log(user)
      res.render("record.ejs", { vehicle: vehicle, user: user, record:record, workshop:workshop });
    } catch (err) {
      console.log(err);
    }
  },
}