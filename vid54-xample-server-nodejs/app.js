// var http= require('http');

// http.createServer(function(rep, res){
//     res.writeHead(200,{'Content-Type':'text/plain'});//header khi truyền vào
//     res.end('Hello Web from Node.js'); //Server res

// }).listen(8088,"127.0.0.1") //Lắng nghe tại cổng 8088 vs IP là 127.0.0.1 === locahost
// ;
// // console.log('Done');

//return JSON
var http= require('http');

http.createServer(function(rep, res){
    res.writeHead(200,{'Content-Type':'text/json; charset=utf-8'});//header khi truyền vào

    var user={
        firstName:'Chu Bin',
        lastName: 'Hoàng Sơn'
    }
    res.end(JSON.stringify(user)); //Server res

}).listen(8088,"127.0.0.1") //Lắng nghe tại cổng 8088 vs IP là 127.0.0.1 === locahost
;
// console.log('Done');