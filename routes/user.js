const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/:id", ensureAuth, userController.getProfile);
router.post("/addVehicle/:id", userController.createVehicle)


module.exports = router;