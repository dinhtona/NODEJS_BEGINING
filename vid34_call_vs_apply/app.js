//Sự khác nhau của Call và Apply
/***
 * call: Khi truyền tham số phải liệt kê theo chiều ngang
 * apply: Khi truyền tham số phải truyền vào là một array
 */
var obj={
    name: "Mai Hoa",
    sayHello:function(year, month){
        console.log(`Hello ${this.name}`);
        console.log(`Đây là năm ${year} tháng ${month}`);
    }
}

obj.sayHello('2018',06);
obj.sayHello.call({name:"Ông nội !"},'2019','08');
obj.sayHello.apply({name:"Bà nội !"},['2020','10']); 