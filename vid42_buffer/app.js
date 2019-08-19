// var buffer = new  Buffer("Xin chào !", 'utf-8');
// console.log(buffer);
// console.log(buffer.toString());
// console.log(buffer.toString('ascii'));
// console.log(buffer.toJSON());

// console.log(buffer[4]);

// buffer.write("Ông");

// console.log(buffer.toString());


var buffer = new ArrayBuffer(8);//8 byte
var view= new Int32Array(buffer);
view[0]=5;
view[1]=10;
view[2]=15;

console.log(view);