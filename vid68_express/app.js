var express = require('express');
var cookieParser = require('cookie-parser'); //get cookie from req
var apiControllers = require('./controllers/apiController');
var homeControllers = require('./controllers/homeController');
const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
// const mongoose = require('mongoose');
//const assert = require('assert');

//var fs = require('fs');//Work with Files

var app = express();
app.set('view engine', 'ejs'); //express'll auto find views folder, it is has template file

var port = 2000;



// mongoose.connect(connectString, (err) => {
//     if (err) {
//         console.log('Connect Error: ', err);
//     }
//     console.log('Connected');
// });//Connect before create schema , { useNewUrlParser: true }

// var Schema = mongoose.Schema;
// var personSchema = new Schema({
//     fName: String,
//     lName: String,
//     Add: String
// });

// var Person = mongoose.model("Person", personSchema);

//custom midleware: write log when client request
app.use('/', (req, res, next) => { //next : bắt buộc phải có để có thể chạy tiếp các midleware khác nữa
    var ip = req.headers['x-real-ip'] || req.connection.remoteAddress;;
    console.log('Request URL: ' + req.url);
    req.requestTime = new Date().getTime(); //Add a prop to req  

    const uri = "mongodb+srv://m4ulov3:Onlyyou%4079@mongodbpart01-dxhak.gcp.mongodb.net/sample_supplies?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        if (err)
            console.log('Connect Error: ', err);
        const db = client.db('sample_supplies');
        const collection = db.collection("sales");

        collection.findOne({ '_id': ObjectId("5bd761dcae323e45a93ccffb") }, function (err, result) {
            if (err) console.log('Error: ', err);

            res.json(result)
            console.log('Result: ', result);
        });
        //console.log('collection: ', collection);
        // perform actions on the collection object
        client.close();
    });


    // var hoa = new Person({
    //     fName: "TONA",
    //     lName: 'Dinh',
    //     Add: 'Biên Hòa'
    // });

    // hoa.save((err) => {
    //     if (err)
    //         console.log('Save Error: ', err);

    //     console.log('Saved successfully');
    // });


    next();
});

app.use(cookieParser());

app.use('/assets', express.static(__dirname + '/public'));//midleware: tạo ra một cầu nối mà mỗi khi client nhập vào từ url có  /assets thì sẽ truy cập vào tên file sau đó

//functions

apiControllers(app);
homeControllers(app);

app.listen(port, () => {
    console.log('Server listening on Port: ' + port);
})