// modificar título
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// chama as variáveis no html
var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = document.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdIMC = paciente.querySelector(".info-imc");

// variáveis de restrição do modelo
var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 150) {
    alert("Peso inválido");
    pesoEhValido = false;
    tdIMC.textContent = "Peso Inválido";
}

if(altura <= 0 || altura >= 3.00) {
    alert("Altura inválida");
    alturaEhValida = false;
    tdAltura.textContent = "Altura Inválida";
}

// calculo do IMC
if(alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
tdIMC.textContent = imc;
}