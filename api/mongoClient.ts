



// const url = "mongodb+srv://Rob:BDZIFUdTzO4QWJ8R@cluster0.jhv3f.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
// const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// export default client;

// const dbName = 'people';

// async function run() {
//   try {
//     await client.connect();
//     console.log("Connected correctly to server");
//     const db = client.db(dbName);
//     // Use the collection "people"
//     const col = db.collection("people");

//     let personDocument = {
//         "name": { "first": "Alan", "last": "Turing" },
//         "birth": new Date(1912, 5, 23),
//         "death": new Date(1954, 5, 7),
//         "contribs": [ "Turing machine", "Turing test", "Turingery" ],
//         "views": 1250000
//     }
//     // Insert a single document, wait for promise so we can read it back
//     const p = await col.insertOne(personDocument);
//     // Find one document
//     const myDoc = await col.find();
//     // Print to the console
//     console.log(myDoc);
//   } catch (err) {
//     console.log(err.stack);
//   }

//   finally {
//     await client.close();
//   }
// }
  
// run().catch(console.dir);




// const uri = "mongodb+srv://Rob:BDZIFUdTzO4QWJ8R@cluster0.jhv3f.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
// import { MongoClient } from "mongodb"

// const url = "mongodb+srv://Rob:BDZIFUdTzO4QWJ8R@cluster0.jhv3f.mongodb.net/sample_airbnb?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
// const client = new MongoClient(url);

// async function run() {
//   try {
//     await client.connect();
//     console.log("Connected correctly to server");
//   } catch (err) {
//     console.log(err.stack);
//   }
//   finally {
//     await client.close();
//   }
// }

// run().catch(console.dir);