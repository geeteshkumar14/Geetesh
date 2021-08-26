const express = require("express");
const router = express.Router();

const {isSignediIn, isAuthenticated, isAdmin} = require("../controllers/auth");
const {getUserById, pushOrderInPurchaseList} = require("../controllers/user");

const {updateStock} = require("../controllers/product")

const {getOrderById, createOrder, getAllOrders, getOrderStatus, updateStatus} = require("../controllers/order")

//params
router.param("userId", getUserById);
router.param("orderId", getOrderById);

//catual routes
router.post("/order/create/:userId", isSignediIn, isAuthenticated, pushOrderInPurchaseList, updateStock, createOrder)

router.get("/order/all/:userId", isSignediIn, isAuthenticated, isAdmin, getAllOrders)

router.get("/order/status/:userId", isSignediIn, isAuthenticated, isAdmin, getOrderStatus)
router.put("/order/:orderId/status/:userId", isSignediIn, isAuthenticated, isAdmin, updateStatus)

module.exports = router;