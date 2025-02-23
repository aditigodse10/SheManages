// routes/products.js
const express = require("express");
const router = express.Router();
const {
  addProduct,
  getProductsByUserId,
  getProductController,
  deleteProductController,
  updateProductController,
} = require("../controllers/productsController");

// Route to add a new product
router.post("/add", addProduct);
router.get("/getProducts", getProductController);
// Route to get products by user ID
router.get("/user/:userId", getProductsByUserId);
router.delete("/delete/:productId", deleteProductController);
router.put("/products/update/:id", updateProductController);

module.exports = router;
