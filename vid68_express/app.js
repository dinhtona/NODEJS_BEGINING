var express = require('express');

var app = express();

var port = 2000;

//functions
const index = (req, res) => {
    res.send('<h1>Express Server Node JS HOME</h1>');
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