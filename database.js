const {URI} = require('./credentials.js')
const {MongoClient} = require('mongodb')




const client = new MongoClient(URI)

const dbName = "node"

const main = async ()=>{

    await client.connect()

    console.log('database connected successfully')

    const db = client.db(dbName)
    const collection = db.collection('users')
    const data = {
        firstname:"Ahmad",
        lastname:"Raza",
        city:"lahore",
        contactnumber:"029834092380"

    }
   //collection.insertOne(data)
   //collection.deleteOne({firstname:"Ahmad"})
    const result = await collection.find({}).toArray()
    console.log(result)

    return "done"
}

main()
.then(console.log)
.catch(console.error)
.finally(()=>client.close())
