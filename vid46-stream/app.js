var fs= require('fs');

var readable= fs.createReadStream(__dirname+'/readme.txt',
    {
        encoding:'utf-8',
        highWaterMark:4*1024 //default: 64KB : Nếu số KB nhỏ hơn dung lượng file thì sẽ chia file ra xử lý theo cấp số  lần
    }
);

var writeable= fs.createWriteStream(__dirname+'/readme2.txt');//Tạo ra một cái write data, viết ra một file tên như trong,

//Sau khi read, thì gọi thằng write và write những gì đọc dc (chunk)
readable.on('data', (chunk)=>{//Mặc định phải là data
    console.log(chunk.length);//chunk.toString('utf-8')
    writeable.write(chunk);
});

//console.log(readable);