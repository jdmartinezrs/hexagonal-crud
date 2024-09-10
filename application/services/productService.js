const ProductRepository = require('../../domain/repositories/productRepository')

class ProductService{
constructor(){
    this.productRepository = new ProductRepository();
}

async getProductByItsName(productName){
    const product = await this.productRepository.getProduct(productName);
    if (!product){
        throw new Error(JSON.stringify({status:404, message: 'User not found'}));
    }
    return product;
}

async postNewProduct(data){
    return await this.productRepository.saveProduct(data);
}

async putASpecificProduct(id, data) {
    if (!id || !data) {
        throw new Error(JSON.stringify({ status: 400, message: 'Invalid input' }));
    }
    const updateProduct = await this.productRepository.updateProductById(id, data);
    if (!updateProduct || updateProduct.matchedCount === 0) {
        throw new Error(JSON.stringify({ status: 404, message: 'Product not found or could not be updated' }));
    }
    return updateProduct;
}

async deleteAProduct(id) {
    const result = await this.productRepository.deleteProductById(id);
    if (result.deletedCount === 0) {
        throw new Error(JSON.stringify({ status: 404, message: 'Product not found or could not be deleted' }));
    }
    return result;
}

}

module.exports = ProductService;

