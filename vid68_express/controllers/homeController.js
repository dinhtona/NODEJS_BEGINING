

var bodyParser = require('body-parser'); // get body post request
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
var mysql = require('mysql');

module.exports = function (app) {

    const index = (req, res) => {
        res.render('index');//access to views folder and get index.ejs file

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'utest',
            password: 'minh123',
            database: 'test',
            port: 3306
        });

        connection.connect(
            (err, arg) => {
                if (err)
                    console.log('TONA - Connect error: ', err.stack);
                else {
                    console.log('Connected as id ' + connection.threadId);
                }
            }
        );
        connection.query({
            sql: 'SELECT * FROM `tbl_sinhvien` WHERE `masv` = ?',
            timeout: 40000, // 40s
        },
            'SV003',
            function (error, results, fields) {
                if (error)
                    console.log('Query ERROR: ', error);
                console.log('Result: ', results);

            }
        );
        connection.end();
        //get stream file
        // var rIndex = fs.createReadStream(__dirname + '/index.html', {
        //     encoding: 'utf-8',
        //     highWaterMark: 16 * 1024
        // });
        // rIndex.pipe(res);
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

    /***
     * ex: http://localhost:2000/user/5?qstr=this_is_query_string&qstr2=9999&qstr=88888
     * req.params: /user/:id <=> /5
     * req.query: ?query_name <=> ?qstr
     */
    // app.get('/user/:id', (req, res) => {// /:name
    //     res.cookie("username", req.params.id);
    //     //res.send(req.params); //lấy tham số client truyền vào: req.params.id
    //     // res.send(`User ID: ${req.params.id}`);
    //     res.render('user', { ID: req.params.id, queryString: req.query.qstr, bodyParser: req.body });
    // });




    app.post('/login', urlencodedParser, (req, res) => {
        res.send(`Wellcome ${req.body.username}`);
        console.log(`
        From Post request:
        - Username: ${req.body.username} 
        - Password: ${req.body.password}
        `);
    });

    app.post('/loginjs', jsonParser, (req, res) => {
        res.send(`Wellcome ${JSON.stringify(req.body)}`);
        console.log(`
        From Post request:
        ${JSON.stringify(req.body)}
        `);
    })
}