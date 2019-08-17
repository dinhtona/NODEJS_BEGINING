var util= require('util');

function Persion(){
    this.fName="Hoa";
    this.lName='Mai';
}

Persion.prototype.sayHello=function(){
    console.log(`Hello ${this.lName} ${this.fName}`);
}

function Student(){
    Persion.call(this);//Nếu không có dòng này thì thằng Student nó k dc kế thừa các thuộc tính của Persion
    this.id="1234";
}

util.inherits(Student, Persion);

var sv= new Student();
sv.sayHello();