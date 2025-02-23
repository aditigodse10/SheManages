// controllers/productsController.js
const Product = require("../models/productModel");

exports.addProduct = async (req, res) => {
  const { userId, username, profile, name, category, price, imageUrl } =
    req.body;

  try {
    const product = new Product({
      userId,
      username,
      profile,
      name,
      category,
      price,
      imageUrl,
    });

    await product.save();
    res.status(201).json({ message: "Product added successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add product" });
  }
};

exports.getProductsByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const products = await Product.find({ userId });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

exports.getProductController = async (req, res) => {
  try {
    const products = await Product.find();
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

// Controller function to handle product deletion
// Controller function to handle product deletion
exports.deleteProductController = async (req, res) => {
  try {
    const { productId } = req.params;
    // console.log("Deleting product with ID: " + productId);
    // if (!mongoose.Types.ObjectId.isValid(productId)) {
    //   return res.status(400).send({ error: "Invalid product ID" });
    // }

    const result = await Product.findByIdAndDelete(productId);
    if (result) {
      res.status(200).send({ message: "Product deleted successfully" });
    } else {
      res.status(404).send({ error: "Product not found" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while deleting the product" });
  }
};

exports.updateProductController = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Error updating product" });
  }
};
