var EventEmitter = require("events");
var util=require("util");

function Dialog(){
    this.message="Hello Node JS"
}

util.inherits(Dialog, EventEmitter);
Dialog.prototype.sayHello=function(){
    console.log (this.message);
    this.emit("hello")
}

var dl= new Dialog();
dl.on("hello", function(){
console.log("Có một lời chào mới !");

});

dl.sayHello('Mai Hoa');