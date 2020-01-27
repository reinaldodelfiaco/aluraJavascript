// modificar título
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// chama as variáveis no html
var paciente = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.lenght ; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = true;
    var alturaEhValida = true;

    if(peso <= 30 || peso >= 150){
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.style.color = "red";
    }

    if(altura <= 1.40 || altura >= 2.15){
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdAltura.textContent = "Altura inválida;"
    }

    // calculo do IMC
    if(pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(){
    console.log("cliquei no botão");
})
