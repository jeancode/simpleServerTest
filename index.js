var express =  require("express");

var app =  express();

app.get('/',function(req,res){

    res.end("Hola Mundo Intel");

});

app.listen(80,function(){

    console.log("Servidor Intel online");

});