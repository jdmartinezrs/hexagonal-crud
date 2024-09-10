const {ObjectId}= require("mongodb");

const ConnectToDatabase = require("../../infrastructure/database/mongodb")

class Product{
  async getProductByName(productName) {
    let obj = ConnectToDatabase.instanceConnect;
    const collection = obj.db.collection('productos');
    const [res] = await collection.aggregate([
    {
    $match: { nombre: productName }
    }
    ]).toArray();
    return res;
    }

    async postProduct(data) {
      const obj = ConnectToDatabase.instanceConnect; // Usa directamente si ya está conectado
      
      const {nombre, tipo_producto, stock} = data

      const productData = {
        nombre: nombre,
        tipo_producto: tipo_producto,
        stock: stock
      };
    
      console.log('Product Data:', productData); // Depuración: Verifica la estructura
    
      const collection = obj.db.collection('productos');
      const res = await collection.insertOne(productData);
    
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


      


