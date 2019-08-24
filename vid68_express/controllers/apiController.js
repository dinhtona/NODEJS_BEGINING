var bodyParser = require('body-parser'); // get body post request
var jsonParser = bodyParser.json();

module.exports = function (app) {
    app.get('/api/user/:id', (req, res) => {
        //get user from database
        const result = {
            fName: 'Chu Bin',
            lName: 'Kai'
        }
        res.json(result);
    });

    app.post('/api/user', jsonParser, (req, res) => {
        //create new an user and save to database

    });

    app.put('/api/user', jsonParser, (req, res) => {
        //update an user
    });

    app.delete('/api/user', jsonParser, (req, res) => {
        //delete an user
    });

};