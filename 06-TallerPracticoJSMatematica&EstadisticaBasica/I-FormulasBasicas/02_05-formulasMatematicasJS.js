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

function calcTriangulo(l1, l2, base, altura) {
    return {
        perimetro: l1 + l2 + base,
        area: (base * altura) / 2
    }
}
console.log(calcTriangulo(3, 5, 6, 7))

function calcAlturaTrianguloIsosceles(lados, base) {
    if (lados != base) {
        return {
            h: Math.sqrt(lados ** 2 - ((base ** 2) / 4))
        }
    } else {
        return ("El triangulo no es isosceles");
    }
}
console.log(calcAlturaTrianguloIsosceles(6, 2))

function calcAlturaTrianguloEscaleno(a, b, c) {
    if (a == b || a == c || b == c) {
        return false;
      } else {
        const s = (a + b + c) / 2;
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        const ha = (2 * area) / a; // altura de a
        const hb = (2 * area) / b; // altura de b
        const hc = (2 * area) / c; // altura de c
    
        return {
            ha,
            hb,
            hc
        };
      }
}
console.log(calcAlturaTrianguloEscaleno(3, 4, 5))




console.groupEnd("Triangulo");

console.group("Circulo");

const rdCirculo = 3; // rd = radio
const dmCirculo = rdCirculo * 2; // dm = diametro
const PI = 3.1415;

const circunferencia = dmCirculo * PI; // o tambien: 2*rdCirculo*PI
const areaCirculo = (rdCirculo ** 2) * PI;

console.log({
    rdCirculo,
    dmCirculo,
    PI,
    circunferencia,
    areaCirculo
});

function calcCirculo(radio) {
    return {
        circunferencia: 2 * radio * PI,
        area: (Math.PI) * (Math.pow(radio, 2))
    }
}

console.log(calcCirculo(3));

console.groupEnd("Circulo");
