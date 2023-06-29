
const express = require("express")
const Product = require("../models/productModel")
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/productController")
const router = express.Router()

// Fetch All Products
router.get('', getProducts)


// Fetch Product By ID
router.get('/:id', getProduct)


// Create Product
router.post('', createProduct)


// Update Products By ID
router.put('/:id', updateProduct)


// Delete Products By ID
router.delete('/:id', deleteProduct)

// =============== Exporting =============== //
module.exports = router;
// =============== Exporting =============== //