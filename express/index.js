const { response } = require("express");
const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("IPv6");
});

app.get("/blog",function(req,res){
    res.send("Esse é o blog do CGNAT");
});

app.get("/site",function(req,res){
    res.send("Esse é um tutorial de IPV6");
});

app.get("/cgnat/:nao?",function(req,res){
    
    var nao = req.params.nao;

    if(nao){
        res.send("Configure seu IPv6 aqui " + "Seu voto foi " + nao);
    }else{
        res.send("CGNAT não mais");
    };
});


app.get("/ola/:nome/:uni",function(req,res){
    var nome = req.params.nome;
    var uni = req.params.uni;
    res.send("Primeiramente " + nome + " Você é um amigo, Segundamente : " + uni);
});

app.get("/canal/blog",function(req,res){
    var canal = req.query["canal"];
    
    if(canal){
    res.send(canal);
    }else{
        res.send("Nenhum canal!");
    };
});

app.listen(3000,function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor Up!!");
    }

});