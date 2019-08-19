// var fs= require('fs');

// var readable= fs.createReadStream(__dirname+'/readme.txt',
//     {
//         encoding:'utf-8',
//         highWaterMark:4*1024 //default: 64KB : Nếu số KB nhỏ hơn dung lượng file thì sẽ chia file ra xử lý theo cấp số  lần
//     }
// );

// var writeable= fs.createWriteStream(__dirname+'/readme2.txt');//Tạo ra một cái write data, viết ra một file tên như trong,

// readable.pipe(writeable);


//----------------------------------

var fs= require('fs');
var zlib= require('zlib');

var readable= fs.createReadStream(__dirname+'/readme.txt',
    {
        encoding:'utf-8',
        highWaterMark:4*1024 //default: 64KB : Nếu số KB nhỏ hơn dung lượng file thì sẽ chia file ra xử lý theo cấp số  lần
    }
);

var writeable= fs.createWriteStream(__dirname+'/readme2.txt');//Tạo ra một cái write data, viết ra một file tên như trong,

var compressed= fs.createWriteStream(__dirname+'/readme.txt.gz');

var gzip=zlib.createGzip();

var gunzip=zlib.createGunzip();
var read_zip=fs.createReadStream(__dirname+'/readme.txt.gz',{
    encodeing: 'utf-8',
    highWaterMark: 32*2014
}
);

var write_unzip= fs.createWriteStream(__dirname+'/after_unzip.txt');


//copy
readable.pipe(writeable);

//compress : nén
readable.pipe(gzip).pipe(compressed);

//uncompressed
console.log('Unzip: ');
read_zip.pipe(gunzip).pipe(write_unzip);