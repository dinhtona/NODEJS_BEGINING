//'use strict';

class Persion{
    constructor(fName, lName){
        this.fName=fName;
        this.lName=lName;
    }

    sayHello(){
        console.log(`Chào ${this.fName} ${this.lName}`);
    }
}
//console.log(`Chào ${this.fName} ${this.lName}`);
// function Persion(lName, fName){
//     this.lName=lName;
//     this.fName=fName;
// }

// Persion.prototype.sayHello=function(){
//     console.log(`Chào ${this.fName} ${this.lName}`);
// }

var p = new Persion('Mai','Hoa');
p.sayHello();

var h= new Persion("Phượng", 'Hoa');
h.sayHello();

console.log(h.__proto__);
console.log(p.__proto__);
console.log(h.__proto__===p.__proto__);