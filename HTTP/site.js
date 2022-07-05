var http = require("http");


http.createServer(function(requisicao,resposta){
    resposta.end("Acessou!")

}).listen(8181);
console.log("Meu servidor esta rodando");