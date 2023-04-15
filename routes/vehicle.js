const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicle");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/:id", vehicleController.getProfile);
router.post("/addRecord/:id", vehicleController.createRecord)


module.exports = router;