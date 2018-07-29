
var digitado;
var num;
var clear;
var sinais;
var escolha;

function myFc(){
    
    let escolha1;
    let escolha2;
    let resultado = document.getElementById('resultado');
    let sinal = document.getElementById('sinal') ;
    let soma = document.getElementById('soma');
    let subtracao = document.getElementById('subtracao');
    let multiplicacao = document.getElementById('multiplicacao');
    let divisao = document.getElementById('divisao');
    let igual = document.getElementById('igual');
    
    
    digitado = document.getElementById('numeroId');
    escolha = document.getElementById('escolha');
    clear = document.getElementById('clear');
    num = document.getElementsByClassName('numero');
    sinais = document.getElementsByClassName('sinais');
    
    
    for(let a = 0; a < num.length; a++){
        num[a].addEventListener('click', function(){
        if(digitado.innerHTML === '0'){
           digitado.innerHTML = num[a].value;
        }else{
        digitado.innerHTML += num[a].value;
        }
        });
    }
    
    subtracao.addEventListener('click', function(){
        escolha1 = digitado.innerHTML;
        escolha.innerHTML = escolha1;
        sinal.innerHTML = subtracao.value;
        digitado.innerHTML = 0;
    })
    soma.addEventListener('click', function(){
        escolha1 = digitado.innerHTML;
        escolha.innerHTML = escolha1;
        sinal.innerHTML = soma.value;
        digitado.innerHTML = 0;
    })
    multiplicacao.addEventListener('click', function(){
        escolha1 = digitado.innerHTML;
        escolha.innerHTML = escolha1;
        sinal.innerHTML = multiplicacao.value;
        digitado.innerHTML = 0;
    })
    divisao.addEventListener('click', function(){
        escolha1 = digitado.innerHTML;
        escolha.innerHTML = escolha1;
        sinal.innerHTML = divisao.value;
        digitado.innerHTML = 0;
    })
    
    igual.addEventListener('click', function(){
        switch (sinal.innerHTML){
            case "-":
                resultado.innerHTML = Number(escolha.innerHTML - digitado.innerHTML)
                break;
            case "+":
                resultado.innerHTML = Number(escolha.innerHTML) + Number(digitado.innerHTML)
                break;
            case "*":
                resultado.innerHTML = Number(escolha.innerHTML * digitado.innerHTML)
                break;
            case "/":
                resultado.innerHTML = Number(escolha.innerHTML / digitado.innerHTML)
                break;
            default:
                resultado.innerHTML = "0";
                break;
        }
    })
    
    clear.addEventListener('click', function(){
        resultado.innerHTML = "0";
        digitado.innerHTML = "0";
        escolha.innerHTML = "0";
        sinal.innerHTML = "|";
    })
}

window.onload = myFc;

