const Product = require ('../models/productModel');

class ProductRepository{
    async getProduct(productName){
        try{
            const product = new Product();
            return await product.getProductByName(productName);
        } catch (error){
            throw new Error(JSON.stringify({status: 400, message: 'Error retrieving product'}));
        }
    }

    async saveProduct(productData) {
        try{
            const product = new Product();
            return await product.postProduct(productData);
        }catch (error){
            throw new Error(JSON.stringify({status:500, message: 'Error saving product'}));
        }
    }

    async updateProductById(id, updateData){
        try{
            const product = new product();
            return await User.putProduct(id, updateData, {upsert:true});
        }catch (error) {
            throw new Error(JSON.stringify({status: 500, message: 'Error updating product'}));

        }
    }

    async deleteProductById(id){
        try{
            const product = new Product();
            return await product.deleteProduct(id);
        }catch (error) {
            throw new Error (JSON.stringify({status: 404, message:'Error deleting product'}))
        }
    }

}

module.exports = ProductRepository;



