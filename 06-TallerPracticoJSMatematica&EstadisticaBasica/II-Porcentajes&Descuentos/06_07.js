const inputPrice = document.querySelector("#price");
const inputCupon = document.querySelector("#cupon");
const result = document.querySelector("#result");
const btnCalcular = document.querySelector("#btnCalcular");

const price = inputPrice.value;
const cupon = inputCupon.value

const cupones = [];
cupones.push({ // Agrego cupones al array de cupones
    name: "cupon1",
    descuento: 10,
    limite: 200
}, {
    name: "cupon2",
    descuento: 20,
    limite: 200
}, {
    name: "cupon3",
    descuento: 50,
    limite: 200
});

btnCalcular.addEventListener("click", calculo)

function calculo() {
    const price = inputPrice.value;    
    const cupon = inputCupon.value;    
    let descuento;
    if (!cupon || !price){ // Verifico que los datos esten
        result.innerText = "Datos insuficientes";
        return;
    }
    // filter: array con todos los elementos que coincidan
    // find: el primer elemento que coincida
    const cuponValidado = cupones.filter(cuponElemento => cuponElemento.name == cupon);

    if (cuponValidado) {
        descuento = cuponValidado[0].descuento;
    } else {
        result.innerText = "Cupon no valido";
        return;
    }

    
    const resultFormula = (price * (100 - descuento)) / 100;
    result.innerText = resultFormula;


}
