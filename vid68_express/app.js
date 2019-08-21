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

app.listen(port, () => {
    console.log('Server listening on Port: ' + port);
})