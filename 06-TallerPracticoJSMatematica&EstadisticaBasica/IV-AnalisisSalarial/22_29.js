// Analisis salarial Personal

function encontrarPersona(nameTrackedPerson) {
  return salarios.find((i) => i.name == nameTrackedPerson);
}

function medianaPorPersona(name) {
  const trabajos = encontrarPersona(name).trabajos;
  const salarios = trabajos.map((i) => i.salario);
  return JsMath.mediana(salarios);
}

function proyeccionSalarialPersonal(name) {
  const trabajos = encontrarPersona(name).trabajos;
  let porcentajeDeCrecimiento = [];

  for (let i = 1; i < trabajos.length; i++) {
    const salarioActual = trabajos[i].salario;
    const salarioPasado = trabajos[i - 1].salario;
    porcentajeDeCrecimiento.push(
      (salarioActual - salarioPasado) / salarioPasado
    ); // Porcentaje de crecimiento de un salario al siguiente expresado en decimal
  }

  return (
    (1 + JsMath.mediana(porcentajeDeCrecimiento)) * trabajos.at(-1).salario
  ); // Se suma 1 al porcentaje expresado en decimal y se multiplica por el salario actual (el ultimo registrado).
}

// Analisis salarial Empresarial
// Agrupacion de los datos de 'salarios.js'
let empresas = {};
for (persona of salarios) {
  for (trabajo of persona.trabajos) {
    // Trabajo de cada persona en un año en un obj;

    // Agrego la empresa al obj
    if (!empresas[trabajo.empresa]) {
      empresas[trabajo.empresa] = {};
    }

    // Agrego cada año dentro de la empresa
    if (!empresas[trabajo.empresa][trabajo.year]) {
      empresas[trabajo.empresa][trabajo.year] = [];
    }

    // Agrego el salario a cada año segun encuentre
    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }
}

// Funcion q calcula el aprox de salario repartido en un año.
function medianaEmpresaYear(nombre, year) {
  if (!empresas[nombre]) {
    console.log("La empresa no existe");
  } else if (!empresas[nombre][year]) {
    console.log("La empresa no dio salarios este año");
  } else {
    return JsMath.mediana(empresas[nombre][year]);
  }
}

//Cosa mia que no debí hacer pq entendi mal el problema.
let mediaYear = {};
for (empresa in empresas) {
  // console.log(empresa, empresas[empresa]);

  for (year in empresas[empresa]) {
    // Agrego el nombre de la empresa
    if (!mediaYear[empresa]) {
      mediaYear[empresa] = {};
    }

    // Agrego el año como llave y la media de salarios pagados como valor
    if (!mediaYear[empresa][year]) {
      mediaYear[empresa][year] = JsMath.media(empresas[empresa][year]);
    }

    // console.log(empresa, year, empresas[empresa][year]); Esto ayuda a entender mucho
  }
}

// Proyeccion salarial
function proyeccionSalarialEmpresarial(nombre) {
  if (!empresas[nombre]) {
    console.log("La empresa no existe");
  } else {
    const years = Object.keys(empresas[nombre]);
    const medianaEmpresa = years.map((year) => {
      return medianaEmpresaYear(nombre, year);
    });

    let porcentajeCrecimiento = [];
    for (let i = 1; i < medianaEmpresa.length; i++) {
      porcentajeCrecimiento.push(
        (medianaEmpresa[i] - medianaEmpresa[i - 1]) / medianaEmpresa[i - 1]
      );
    }
    const medianaPorcentajeCrecimiento = JsMath.mediana(porcentajeCrecimiento);

    return (1 + medianaPorcentajeCrecimiento) * medianaEmpresa.at(-1);
  }
}

// Mediana General
function medianaGeneral() {
  const listaMedianas = salarios.map((persona) =>
    medianaPorPersona(persona.name)
  );

  return JsMath.mediana(listaMedianas);
}

function medianaTop10() {
  const listaMedianas = JsMath.ordenarMinToMax(
    salarios.map((persona) => medianaPorPersona(persona.name))
  );

  const cantidad = listaMedianas.length / 10;

  const top10 = listaMedianas.slice(listaMedianas.length - cantidad)

  return JsMath.mediana(top10);

}

console.log(empresas);
