var express = require('express');

var app = express();

var port = 2000;

app.use('/assets', express.static(__dirname + '/public'));//midleware: tạo ra một cầu nối mà mỗi khi client nhập vào từ url có  /assets thì sẽ truy cập vào tên file sau đó

//custom midleware: write log when client request
app.use('/', (req, res, next) => { //next : bắt buộc phải có để có thể chạy tiếp các midleware khác nữa
    var ip = req.connection.remoteAddress;
    console.log('IP: ' + ip + '\nRequest URL: ' + req.url);
    req.requestTime = new Date().getTime();

    next();
});

//functions
const index = (req, res) => {
    res.send(`
        <link rel='stylesheet' type="text/css" href='/assets/style.css' />
        <h1>Express Server Node JS HOME</h1>
        <p>Request time: ${req.requestTime}</p>
    `);//href='/assets/style.css' : Truy cập tới file style.css trong public đã dược map thành /assest/
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
    //res.send(req.params); //lấy tham số client truyền vào: req.params.id
    res.send(`User ID: ${req.params.id}`);
});

app.listen(port, () => {
    console.log('Server listening on Port: ' + port);
})