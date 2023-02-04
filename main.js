let base = prompt("Digite o número da base:");
base = parseInt(base);

let altura = prompt("Digite o número da altura:");
altura = parseInt(altura);

function calculaArea (base, altura){
    let resultado = base*altura;
    return resultado;
}
alert("O valor da área é: "+calculaArea(base,altura));