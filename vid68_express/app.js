var express = require('express');
var cookieParser = require('cookie-parser'); //get cookie from req
var apiControllers = require('./controllers/apiController');
var homeControllers = require('./controllers/homeController');
const MongoClient = require('mongodb').MongoClient;
//const assert = require('assert');

//var fs = require('fs');//Work with Files

var app = express();
app.set('view engine', 'ejs'); //express'll auto find views folder, it is has template file


var port = 2000;

var querystring = require("querystring");
// var result = querystring.stringify({ query: "SELECT name FROM user WHERE uid = me()" });
let passEncode = querystring.stringify('Onlyyou@79');
let connectString = 'mongodb+srv://m4ulov3:' + passEncode + '@mongodbpart01-dxhak.gcp.mongodb.net/test?retryWrites=true&w=majority';

const uri = "mongodb+srv://m4ulov3:Onlyyou@79@mongodbpart01-dxhak.gcp.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(connectString, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    if (err)
        console.log('MongoClient Err: ', err);
    else {
        const collection = client.db("test").collection("devices");
    }

    // perform actions on the collection object
    client.close();
});

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