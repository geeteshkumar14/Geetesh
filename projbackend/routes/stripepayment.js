const express = require("express");
const router = express.Router();
const { signout, signup, signin, isSignediIn } = require("../controllers/auth");

const { makepayment } = require("../controllers/stripepayment");

router.post("/stripepayment", makepayment);

module.exports = router;
