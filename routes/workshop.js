const express = require("express");
const router = express.Router();
const workshopController = require("../controllers/workshop");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", workshopController.getProfile);
router.post("/createCustomer", workshopController.createCustomer)
router.delete("/deleteCustomer/:id", workshopController.deleteCustomer);

module.exports = router;
