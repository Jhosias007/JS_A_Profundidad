const nums = document.querySelector("#nums");
const btnCalc = document.querySelector("#btnCalc");
const result = document.querySelector(".result");
let tmp = 0;

btnCalc.addEventListener("click", calcPromedio);

function calcPromedio () {
    let numsArray = nums.value.split(" ").map(i => i = Number(i)); // Var numsArray es la lista en enteros
    for (i of numsArray) {
        tmp = tmp + i;
    }
    tmp = tmp/numsArray.length
    result.innerText = tmp
    tmp = 0;
}
