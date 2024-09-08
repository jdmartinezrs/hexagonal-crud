const express = require('express');
const ProductController = require('../controllers/productController');
const ProductValidator = require('../validator/productValidator');
const ProductController = require('../controllers/productController');

const router = express.Router();
const productController = new ProductController();
const productValidator = new ProductValidator();

router.get('/:id', productValidator.validateProductId(), (req,res)=>productController.getProducts(req,res));
router.post('/', productValidator.validateProductData(),(req, res)=> productController.postANewProduct(req, res));
router.put('/:id', productValidator.validateProductUpdateById(),(req,res)=>productController.putAspecificProduct(req,res));
router.delete('/:id', productValidator.validateProductId(),(req,res) => productController.deleteASpecificProduct(req,res));


module.exports = router;
