
// const Post = require("../models/Post");
const Customer = require("../models/Customer");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const customers = await Customer.find({ workshopName: req.user.id });
      res.render("workshopHome.ejs", { customers: customers, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createCustomer: async (req, res) => {
    try {
      // Upload image to cloudinary
      await Customer.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        workshopName: req.user.id,
      });
      console.log("Post has been added!");
      res.redirect("/workshop");
    } catch (err) {
      console.log(err);
    }
  },
  deleteCustomer: async (req, res) => {
    try {
      // Find post by id
      let test = await Customer.findById({ _id: req.params.id });
      await Customer.remove({ _id: req.params.id });
      console.log("Deleted Customer");
      res.redirect("/workshop");
    } catch (err) {
      res.redirect("/workshop");
    }
  },
}