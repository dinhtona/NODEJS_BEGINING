//Kế thừa 1 thứ, thêm hàm vào, gọi hàm trong qua tenham.on và thực thi hàm thông qua tenham.emit
var EventEmitter = require("events");
var util=require("util");

function Dialog(){
    this.message="Hello Node JS"
}

util.inherits(Dialog, EventEmitter);
Dialog.prototype.sayHello=function(data){
    console.log (this.message+": "+ data);
    this.emit("hello", data)
}

var dl= new Dialog();
dl.on("hello", function(data){
console.log("Có một lời chào mới ! ", data);

});

dl.sayHello('Mai Hoa');