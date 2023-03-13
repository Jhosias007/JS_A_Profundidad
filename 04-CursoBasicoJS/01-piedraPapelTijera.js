
// Usando el conficional if.
console.log("CONDICIONAL IF")
var usr = "piedra";
var pc = "papel";
function juego () {
    if ((usr === "piedra" && pc === "tijera") || (usr === "papel" && pc === "piedra") || (usr === "tijera" && pc === "papel")) {
        console.log("Ganaste");
    } else if (usr === pc) {
        console.log("Empate");
    } else {
        console.log("Gano el pc");
    }
}
juego();


console.log("")

//Usando switch
console.log("CONDICIONAL SWITCH")

var usr = "piedra";
var pc = "tijera";

switch (true) {
    case (usr === pc):
        console.log("Empate");
        break;
    
    case (usr === "piedra" && pc === "tijera"):
        console.log("Gana user");
        break;
    
    case (usr === "papel" && pc === "piedra"):
        console.log("Gana user");
        break;
    
    case (usr === "tijera" && pc === "papel"):
        console.log("Gana user");
        break;
    
    default:
        console.log("Perdiste");
        break;
    
}

