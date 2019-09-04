const config = require('./config/index');
const DBNAME = require('./config/config.json').dbname;
const MongoClient = require('mongodb').MongoClient;

const Client = () => {
    const uri = config.getDBConnectString();
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    return client;
}

module.export = {

    getAllDataFromCollection: (collectionName) => {

        Client().connect(err => {
            if (err)
                console.log('MongoDB Connect Error: ', err);
            const db = client.db(DBNAME);
            const collection = db.collection(collectionName);

            collection.findOne({}, function (err, result) {
                if (err) console.log('Error: ', err);

                res.json(result)
                console.log('Result: ', result);
            });
            client.close();
        });
    },
    getFilterDataFromCollection: (collectionName, datafilter) => {//'_id': ObjectId("5d69f2bb1c9d4400001bd98f") 

        Client().connect(err => {
            if (err)
                console.log('MongoDB Connect Error: ', err);
            const db = client.db(DBNAME);
            const collection = db.collection(collectionName);

            collection.findOne({ datafilter }, function (err, result) {
                if (err) console.log('Error: ', err);

                res.json(result)
                console.log('Result: ', result);
            });
            client.close();
        });
    }
}