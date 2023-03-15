// Cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

function calcCuadr(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado
    }
}
console.log(calcCuadr(12))
console.log(calcCuadr(4))
console.log(calcCuadr(1))


console.groupEnd("Cuadrado")

// Triangulo
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase
const areaTriangulo = (ladoTriangulo1 * alturaTriangulo) / 2

function calcTri(l1, l2, base, altura) {
    return {
        perimetro: l1 + l2 + base,
        area: (base * altura) / 2
    }
}
console.log(calcTri(3, 5, 6, 7))
console.log(calcTri(12, 6, 21, 7))

console.groupEnd("Triangulo");