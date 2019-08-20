var _= require('lodash');

var array=[1];
var other=_.concat(array,2,[3],[[4]]);

console.log(array);
console.log(other);

console.log(_.difference([2,1,5], [2,3,4]));

var users=[
    {name:'Hoa', age:20, active:true},
    {name:'Lan', age:60, active:true},
    {name:'Quế', age:40, active:false},
    {name:'Chi ca', age:50, active:true},
]

var finder=_.find(users,(user)=>{
    return user.age<=40;
})

var filter=_.filter(users,(user)=>{
    return user.age<=40;
})

console.log(finder);
console.log(filter);