var nome = "Calculadora" 

function soma(a,b){
    return a + b;
}

function mult(c,d){
    return c * d;
}

function div(e,f){
    return e / f;
}

function sub(g,h){
    return g - h;
}

module.exports = {
    soma,
    mult,
    div,
    sub,
    nome,
}