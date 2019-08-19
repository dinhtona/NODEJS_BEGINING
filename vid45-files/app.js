// file: fs
var fs= require('fs');

var content = fs.readFileSync(__dirname+'/readme.txt','utf-8');//đọc file đồng bộ

//console.log(content);

var content2= fs.readFile(__dirname + '/readme3.txt','utf-8',(err,data)=>{
    if (err) {
        console.log('err: ',err);
        
    }else{
        console.log('dat: ',data);
    }
});

console.log('content2: ',content2);


