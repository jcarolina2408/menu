function funcion6() {
function s(numeroMenor, numeroMayor) {

    if (numeroMenor >= numeroMayor) {
        console.log("El primer número debe ser menor que el segundo.");
        return;
    }

   for (let i = numeroMenor + 1; i < numeroMayor; i++) {
        console.log(i); 
    }
}

let primerNumero = 5;
let segundoNumero = 15;

s(primerNumero, segundoNumero);
console.log("Función 6 de CICLOS");
}

// Exportar la función para que esté disponible para otros archivos
module.exports = funcion6;