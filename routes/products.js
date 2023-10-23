const express = require('express');
const router = express.Router();
const productController = require('../controller/Products');

router
  // .get("/", productController.getAllProduct)
  .post("/",  productController.createProduct)
//   .get("/search", productController.getSearchProduct)

module.exports = router;