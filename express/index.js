const { response } = require("express");
const express = require("express");
const app = express();

app.get("/",function(req,res){

    res.send("Ola");
});

app.get("/blog",function(req,res){

    res.send("Esse é o bog do CGNAT");
});

app.get("/canal",function(req,res){

    res.send("Esse é um tutorial de IPV6")
});

app.get("/cgnat",function(req,res){

    res.send("CGNAT não mais")
});




app.listen(3000,function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor Up!!");
    }

});