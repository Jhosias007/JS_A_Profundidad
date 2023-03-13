
function Auto (marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var listAutos = [];

var cantidadAutos = Number(prompt("Cuantos carros?"));

while (0 < cantidadAutos) {
    var marcaS = prompt("Marca");
    var modeloS = prompt("Modelo");
    var annioS = prompt("Año");

    var autoNuevo = new Auto(marcaS, modeloS, annioS);
    listAutos.push(autoNuevo);
    cantidadAutos--

}

for (i in listAutos){
    console.log(i);
}
