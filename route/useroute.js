const express = require("express")
const router = express.Router();

const RegisterRoute = require("../controller/userController");

router.post('/add', RegisterRoute.register);

module.exports = router;