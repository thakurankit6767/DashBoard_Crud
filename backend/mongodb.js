const {MongoClient} = require('mongodb')
const url= 'mongodb+srv://ankit:ankit12345@cluster0.rrtc5u1.mongodb.net/dashboard';
const databaseName='e-comm'
const client= new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
    db= result.db(databaseName);
    return db.collection('products');
  
}
module.exports= dbConnect;