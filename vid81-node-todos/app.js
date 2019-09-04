var express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');

let app = express();
const port = 9000;//process.env.PORT || 

app.use('/assets', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));//chấp nhận tất cả các kiểu dữ liệu post lên server
app.use(bodyParser.json());


app.use(morgan('dev')); //ghi log ra những request gửi tới server

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(port, () => {
    console.log('App listening on Port: ' + port);
});