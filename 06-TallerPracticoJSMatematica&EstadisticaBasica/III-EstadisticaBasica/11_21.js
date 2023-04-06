
const nums = document.querySelector("#nums");
const btnCalc = document.querySelector("#btnCalc");
const resultPromedio = document.querySelector("#resultPromedio");
const resultMediana = document.querySelector("#resultMediana");
const resultModa = document.querySelector("#resultModa");
const resultMediaGeometrica = document.querySelector("#resultMediaGeometrica")
const JsMath = {};

btnCalc.addEventListener("click", fnPrincipal);

JsMath.esPar = () => nums.value.split(" ").map(i => i = Number(i)).length % 2 == 0 ? true : false

function fnPrincipal() {
    JsMath.calcPromedio2();
    JsMath.calcMediana();
    JsMath.calcModa();
    JsMath.calcMediaGeometrica();
    // JsMath.esPar(); innecesario
}

JsMath.calcPromedio = function calcPromedio() { // Forma 1 con metodo map o con for
    const numsArray = nums.value.split(" ").map(i => i = Number(i));
    numsArray.map(i => tmp = tmp + i)
    resultPromedio.innerText = tmp / numsArray.length
    tmp = 0;
}

JsMath.calcPromedio2 = function calcPromedio2() { // Forma 2 con metodo reduce
    const numsArray = nums.value.split(" ").map(i => i = Number(i));
    resultPromedio.innerText = numsArray.reduce((a, b) => a + b) / numsArray.length;
}

JsMath.calcMediana = function calcMediana() {
    const numsArray =
        nums.value.split(" ") // separo cada numero
            .map(i => i = Number(i)) // convierto cada elem. a numero
            .sort((a, b) => a - b); // ordeno la lista de menor a mayor

    if (JsMath.esPar()) {
        let index = (numsArray.length / 2) - 1;
        resultMediana.innerText = (numsArray[index] + numsArray[index + 1]) / 2;
    } else {
        let index = (numsArray.length / 2) - 0.5;
        resultMediana.innerText = numsArray[index];
    }

}

JsMath.calcModa = function calcModa() {
    const numsArray = nums.value.split(" ").map(i => Number(i));

    numsArray.length == 1 ? resultModa.innerText = "moda inexistente para el caso" : {};

    let obj = {}

    for (let i = 0; i < numsArray.length; i++) {
        obj[numsArray[i]] ? obj[numsArray[i]] += 1 : obj[numsArray[i]] = 1;
    }

    arrayBidismensional = Object.entries(obj);

    arrayBidismensional = arrayBidismensional.sort((a, b) => a[1] - b[1]);

    if (arrayBidismensional[arrayBidismensional.length - 1][1] == arrayBidismensional[arrayBidismensional.length - 2][1]) {
        resultModa.innerText = "no hay moda, no se repiten o los q se repiten al max. aparecen mas de una vez";
    } else {
        resultModa.innerText = arrayBidismensional[arrayBidismensional.length - 1][0];
    }
}

JsMath.calcMediaGeometrica = function calcMediaGeometrica() {
    const numsArray = nums.value.split(" ").map(i => Number(i));
    let accValue = 1;

    for (let i = 0; i < numsArray.length; i++) {
        accValue *= numsArray[i];
    }

    resultMediaGeometrica.innerText = Math.pow(accValue, 1 / numsArray.length);
}
