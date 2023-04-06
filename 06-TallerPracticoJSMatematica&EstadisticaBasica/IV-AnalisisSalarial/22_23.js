console.log(salarios);
console.log(JsMath);

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




