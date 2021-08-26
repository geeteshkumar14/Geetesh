const express = require("express");
const router = express.Router();

const{ getCategoryById, createCategory, getCategory, getAllCategory, updateCategory,  deleteCategory } = require("../controllers/category");
const{isSignediIn, isAdmin, isAuthenticated  } = require("../controllers/auth");
const{ getUserById } = require("../controllers/user");
const { Router } = require("express");

//using param
router.param("userId" , getUserById);
router.param("categoryId" , getCategoryById);

//actual routes category
//create
router.post("/category/create/:userId" ,isSignediIn, isAuthenticated, isAdmin , createCategory);
//read
router.get("/category/:categoryId" , getCategory);
router.get("/categories",getAllCategory);
//update categori
router.put("/category/:categoryId/:userId" ,isSignediIn, isAuthenticated, isAdmin , updateCategory);
//delete categories
router.delete("/category/:categoryId/:userId" ,isSignediIn, isAuthenticated, isAdmin , deleteCategory);


module.exports = router;