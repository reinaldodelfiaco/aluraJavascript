// modificar título
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// calculo do IMC
var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = document.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdIMC = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura);
tdIMC.textContent = imc;