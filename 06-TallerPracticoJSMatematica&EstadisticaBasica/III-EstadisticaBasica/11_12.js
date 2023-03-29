const nums = document.querySelector("#nums");
const btnCalc = document.querySelector("#btnCalc");
const result = document.querySelector(".result");
let tmp = 0;

btnCalc.addEventListener("click", calcPromedio);

function calcPromedio () {
    let numsArray = nums.value.split(" ").map(i => i = Number(i));
    numsArray.map(i => tmp = tmp + i)
    result.innerText = tmp/numsArray.length
    tmp = 0;
}
