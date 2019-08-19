var Dialog= require('./Dialog');

var dl= new Dialog();

dl.on('hello2', function (data){
    console.log('Có một lời chào mới !', data);
});


dl.sayHello("Mai Hoa");