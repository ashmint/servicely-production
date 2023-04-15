const express = require("express");
const router = express.Router();
const recordController = require("../controllers/record");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/:id", recordController.getProfile);



module.exports = router;