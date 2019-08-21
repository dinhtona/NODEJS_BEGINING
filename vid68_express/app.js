var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.set('view engine', 'ejs'); //express'll auto find views folder, it is has template file

var port = 2000;

//custom midleware: write log when client request
app.use('/', (req, res, next) => { //next : bắt buộc phải có để có thể chạy tiếp các midleware khác nữa
    var ip = req.headers['x-real-ip'] || req.connection.remoteAddress;;
    console.log('IP: ' + ip + '\nRequest URL: ' + req.url);
    req.requestTime = new Date().getTime();

    next();
});

app.use(cookieParser());

app.use('/assets', express.static(__dirname + '/public'));//midleware: tạo ra một cầu nối mà mỗi khi client nhập vào từ url có  /assets thì sẽ truy cập vào tên file sau đó

//functions
const index = (req, res) => {
    res.render('index');//access to views folder and get index.ejs file
}
//end functions


app.get('/', (req, res) => {
    index(req, res);
});
app.get('/index.html', (req, res) => {
    index(req, res);
});

app.get('/user', (req, res) => {
    var user = {
        username: 'TONA',
        password: 'password'
    };
    //res.send(JSON.stringify(user));
    res.json(user);//giống như trên
}); //test save

app.get('/user/:id', (req, res) => {// /:name
    res.cookie("username", req.params.id);
    //res.send(req.params); //lấy tham số client truyền vào: req.params.id
    // res.send(`User ID: ${req.params.id}`);
    res.render('user', { ID: req.params.id });
});

app.listen(port, () => {
    console.log('Server listening on Port: ' + port);
})