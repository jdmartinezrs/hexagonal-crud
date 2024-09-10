const {body, query, param}= require("express-validator");
const {ObjectId} = require ("mongodb");

class ProductValidator{
    validateProductData() {
        return [
        body('nombre').notEmpty().withMessage('The name is mandatory'),
        body('tipo_producto').isString().withMessage('The product type must be a string'),
        body('stock').isNumeric().notEmpty().withMessage('The stock is mandatory')
        ];
        }
        
        validateProductName() {
        return [
        param('name').notEmpty().withMessage('Product name is required')
        ];
        }

 validateProductDataEmpty = () =>{
    return [
        body().custom((value,{req})=>{
            if (Object.keys(req.body).length> 0){
                throw new Error('Do not send anything in the body');
            }
            return true;
        }),
        query().custom((value,{req})=>{
            if (Object.keys(req.query).length> 0){
                throw new Error('Dont send anything in the URL');
            }
            return true;
        })

    ];
 };

validateProductId = () => {
    return[
        param('id').custom((value,{req}) =>{
            if (!ObjectId.isValid(value)){
                throw new Error('Submit a valid ID');
            }
            return true;
        }),
        query().custom((value,{req})=>{
            if (Object.keyz(req.query).length>0){
                throw new Error('Do not send anything in the body')
            }
            return true;
        })
    ];
};

validateProductUpdateById = () => {
    return[
        body('nombre').notEmpty().withMessage('The name is mandatory'),
        body('tipo_producto').isString().withMessage('the product type must be a string'),
        body('stock').isNumeric().notEmpty().withMessage('The stock is mandatory'),

        param('id').custom((value, {req}) =>{
            if (!ObjectId.isValid(value)){
                throw new Error('Submit a valid ID');
            }
            return true;
        }),
        query().custom((value,{req})=>{
            if (Object.keys(req.query).length >0){
                throw new Error ('Dont send anything in the url');
            }
            return true;
        })
        
    ];

};

}

module.exports = ProductValidator;