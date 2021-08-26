const express = require("express");
const router = express.Router();

const {getUserById, getUser, updateUser ,  userPurchaseList} = require("../controllers/user");
const {isSignediIn, isAuthenticated, isAdmin} = require("../controllers/auth");
router.param("userId", getUserById);

router.get("/user/:userId", isSignediIn, isAuthenticated, getUser);

router.put("/user/:userId" , isSignediIn , isAuthenticated , updateUser);
router.get("orders/user/:userId" , isSignediIn , isAuthenticated , userPurchaseList);


module.exports = router;