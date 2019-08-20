var http = require('http');
var fs=require('fs');

http.createServer(function (req, res) {
    //header khi truyền vào

    //console.log('req.url: ', req.url);

    if (req.url === "/" || req.url === '/index.html' ) {
        fs.createReadStream(__dirname+'/index.html','utf-8')
            .pipe(res)
        ;
    } else if(req.url==='/api') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        var user = {
            firstName: 'Chu Bin',
            lastName: 'Hoàng Sơn'
        }
        res.end(JSON.stringify(user)); //Server res

    }else{
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('404 Page not found !');
    }


}).listen(8088, "127.0.0.1", () => {
    console.log('Server listening on localhost:8088...');
}) //Lắng nghe tại cổng 8088 vs IP là 127.0.0.1 === locahost
    ;