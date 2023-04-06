const JsMath = {};

JsMath.esPar = function (arr) {
  return arr.length % 2 == 0 ? true : false;
};

JsMath.media = function (arr) {
  let accValue = 0;
  for (let i in arr) {
    accValue += arr[i];
  }
  return accValue / arr.length;
};

JsMath.mediana = function (arr) {
  arr.sort((a, b) => a - b); // Ordeno el array.

  let index = arr.length / 2;

  if (JsMath.esPar(arr)) {
    return JsMath.media([arr[index], arr[index - 1]]);
  } else {
    return arr[index - 0.5];
  }
};

JsMath.moda = function (arr) {
  let obj = {};
  // Inserto numero (clave) y las veces que se repite este (valor)
  arr.map((i) => {
    if (obj[i]) {
      obj[i] += 1;
    } else {
      obj[i] = 1;
    }
  });

  // Devuelvo el mas repetido
  return Object.entries(obj) // Arr Bidimensional
    .sort((a, b) => a[1] - b[1]) // Ordeno de menor a mayor dependiendo de el segundo valor de cada array
    .at(-1)[0]; // Selecciono el ultimo array del Arr Bidimensional y devuelvo la llave que esta en la primera posicion -> [0];
};
JsMath.mediaGeometrica = function (arr) {
  let accValue = 1;
  arr.map((i) => (accValue *= i));
  return Math.pow(accValue, 1 / arr.length);
};
