const express = require("express");
const router = express.Router();

const {
  getCategoryById,
  getCategory,
  getAllCategory,
  updateCategory,
  removeCategory,
  createCategory,
} = require("../controllers/category");
const { isAuthenticated, isSignedIn, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//PARAMS
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

//ACTUAL ROUTERS GOES HERE

//CREATE
router.post(
  "/category/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createCategory
);

//READ
router.get("/category/:categoryId", getCategory);
router.get("/categories", getAllCategory);

//UPDATE
router.put(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateCategory
);

//DELETE
router.delete(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  removeCategory
);

module.exports = router;
