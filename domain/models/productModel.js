const {ObjectId}= require("mongodb");

const ConnectToDatabase = require("../../infrastructure/database/mongodb")

class Product{
    async getProductByName (productName){
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('productos');
        const [res] = await collection.aggregate([
            {
              $match: { nombre: productName }
            }
          ]).toArray();
          return res;
    }

    async postProduct(nombre, tipo_producto, stock) {
        
          const obj = await new ConnectToDatabase().connect();
          const collection = obj.db.collection('productos');
    
          const productData = {
            nombre: nombre,
            tipo_producto: tipo_producto,
            stock: stock
          };
    
          const res = await collection.insertMany([productData]);
          return res;
      
      }

    async putProduct(id, updateData, upsert){

        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('productos');
        const res = await collection.updateOne({_id: new ObjectId(id)},
        {$set: updateData}, upsert);
        return res;
    }


    async deleteProduct(id){
        let obj = ConnectToDatabase.instanceConnect;
        const collection = obj.db.collection('productos');
        const res = await collection.deleteMany({_d: new ObjectId(id)});
        return res;
    }
    }


module.exports = Product


      


