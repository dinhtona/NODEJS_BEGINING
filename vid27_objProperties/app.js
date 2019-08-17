var Emitter=require('./emitter');
var eventConfig= require('./config');

var emitter=  new Emitter();

emitter.on(eventConfig.BAD_SCORE, function(){
    console.log("Một môn nào đó bị điểm kém !");

});
emitter.on(eventConfig.BAD_SCORE, function(){
    console.log("Đã bị điểm kém, cần báo lại cho phụ huynh !");

});

var scores=[10,4];

for(var s of scores){
    if(s<5){
        console.log("Điểm thấp quá ",s);
        emitter.emit(eventConfig.BAD_SCORE);
    }
}