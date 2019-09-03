const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 8080;

app.use('/assets', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));//chấp nhận tất cả các kiểu dữ liệu post lên server
app.use(bodyParser.json);


app.use(morgan('dev')); //ghi log ra những request gửi tới server

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log('App listening on Port: ' + port);
});