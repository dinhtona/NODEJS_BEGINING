var express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');

// const config = require('./config/index');

let app = express();
const port = process.env.PORT || 3000;//

app.use('/assets', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));//chấp nhận tất cả các kiểu dữ liệu post lên server
app.use(bodyParser.json());


app.use(morgan('dev')); //ghi log ra những request gửi tới server

app.set('view engine', 'ejs');

//db info
//console.log(config.getDBConnectString());

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(port, () => {
    console.log('App listening on Port: ' + port);
});