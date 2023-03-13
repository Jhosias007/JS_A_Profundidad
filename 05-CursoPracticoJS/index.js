const form = document.querySelector('#form');
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#pResultado');

// form.addEventListener("submit", sumarInputValues);

// function sumarInputValues (event) {
//     event.preventDefault();
//     pResultado.innerText = "Resultado: " + (Number(input1.value) + Number(input2.value));
// }


btn.addEventListener("click", sumarInputValues);

function sumarInputValues (event) {
    pResultado.innerText = "Resultado: " + (Number(input1.value) + Number(input2.value));
}
// Cambio 1
// Cambio 2