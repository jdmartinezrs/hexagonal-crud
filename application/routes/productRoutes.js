const express = require('express');
const ProductController = require('../controllers/productController');
const ProductValidator = require('../validator/productValidator');
const path = require('path');


const router = express.Router();
const productController = new ProductController();
const productValidator = new ProductValidator();

router.get("/",(req,res)=>{
    console.log("err");
    res.sendFile(path.join(req.__dirname, process.env.EXPRESS_STATIC, 'views/home.html'));
})

router.get('/:name', productValidator.validateProductName(), productController.getProductByName.bind(productController));
router.post('/', productValidator.validateProductData(),(req, res)=> productController.postANewProduct(req, res));
router.put('/:id', productValidator.validateProductUpdateById(),(req,res)=>productController.putAspecificProduct(req,res));
router.delete('/:id', productValidator.validateProductId(), (req, res) => productController.deleteASpecificProduct(req, res));


module.exports = router;
