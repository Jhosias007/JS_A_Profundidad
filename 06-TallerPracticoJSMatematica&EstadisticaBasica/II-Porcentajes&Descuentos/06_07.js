const cantidad = document.querySelector("#cantidad");
const porcentaje = document.querySelector("#porcentaje");
const resultado = document.querySelector("#resultado");
const btnResultado = document.querySelector("#btnResultado");

btnResultado.addEventListener("click", calcular);

function calcular() {
    resultado.innerHTML = cantidad.value * porcentaje.value / 100;
}



