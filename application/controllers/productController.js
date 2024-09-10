const { validationResult} = require ('express-validator');
const ProductService = require('../services/productService');

class ProductController {
    constructor(){
        this.productService = new ProductService(); 
    }

    async getProductByName(req, res) {
        try {
        const { name } = req.params;
        const product = await this.productService.getProductByItsName(name);
        res.json(product);
        } catch (error) {
        const { status, message } = JSON.parse(error.message);
        res.status(status).json({ message });
        }
        }

    async postANewProduct(req, res){
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array()});
            const product = await this.productService.postNewProduct(req.body);
            res.status(201).json(product);
        }catch (error){
            const errorObj = JSON.parse(error.message);
            res.status(errorObj.status).json({message: errorObj.message});
        }
    }

    async putAspecificProduct (req, res){
        try{
            const errors = validationResult(req);
            if (!errors.isEmpty()) return res.status(400).json({errors: errors.array()});
            const product = await this.productService.putASpecificProduct(req.params.id, req.body);
            res.status(200).json(product);
        }catch(error){
            const errorObj = JSON.parse(error.message);
            res.status(errorObj.status).json({message: errorObj.message});
        }
    }

async deleteASpecificProduct(req, res){
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({errors:errors.array()});
        const product = await this.productService.deleteAProduct(req.params.id);
        res.status(204).json(product);
    }catch (error){
        const errorObj = JSON.parse(error.message);
        res.status(errorObj.status).json({message: errorObj.message});
    }
}

}
module.exports = ProductController;