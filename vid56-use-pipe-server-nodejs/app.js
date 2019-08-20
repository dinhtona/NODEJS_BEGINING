var http=require('http');
var fs= require('fs');

http.createServer((req,res)=>{
    res.writeHead(200, {
        'Content-Type':'text/html; chaset=utf-8'
    });

    fs.createReadStream(__dirname+'/index.html',{
        encoding:'utf-8',
        highWaterMark:16*1024
    }).pipe(res)//Chỗ này phải thay thế custom stream để có thể replace {user}
    ;
    // var user = "TONA ông kẹ";
    //     res=res.toString().replace('{user}', user);

}).listen(8088, "127.0.0.1");