var persion={
    fName:'',
    lName:'',
    getFullName: function(){
        return this.fName + ' ' + this.lName;
    }
}

var hoa= Object.create(persion);
hoa.fName='Ngo';
hoa.lName='Hoa';

var yen= Object.create(persion);
yen.fName='Le';
yen.lName='Yen';

console.log(hoa.getFullName());
console.log(yen.getFullName());