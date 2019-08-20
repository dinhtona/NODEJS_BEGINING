//Res một html
var http = require('http');
var fs = require('fs');

http.createServer(function (rep, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });//header khi truyền vào 'Content-Type':'text/html' -> quy định data trả về là kiểu gì !


    // var html= fs.readFileSync(__dirname + '/index.html','utf-8');

    // var user="TONA ông kẹ";

    // html=html.replace('{user}',user);

    // res.end(html); //Server res

     var html =fs.readFile(__dirname + '/index.html', (err, data) => {//user Async
        if (err) {
            res.end(err.toString());
        }else{
             var user = "TONA ông kẹ";
            data=data.toString().replace('{user}', user);
            //data = data.replace('{user}', user);
            //console.log('data: ',data);
            res.end(data);
        }       
    })

}).listen(8088, "127.0.0.1") //Lắng nghe tại cổng 8088 vs IP là 127.0.0.1 === locahost
    ;
// console.log('Done');