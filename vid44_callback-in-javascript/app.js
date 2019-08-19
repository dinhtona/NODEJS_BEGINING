function    readDatabase(callBack){
    //read done
var user={
    name:'Mai hoa'
}

    callBack(user);
}

readDatabase(function(data){
    console.log('Read done callback');
    console.log('Data: ',data);
    
})

readDatabase(function(data){
    console.log('Read done callback 2 !');
    console.log('User Name: ',data.name);
    
})