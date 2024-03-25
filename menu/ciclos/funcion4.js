function funcion4() {
for (let i = 1; i <= 30; i++) {

    let cuadrado = i * i;
   
    console.log("El cuadrado de", i, "es", cuadrado);
}
console.log("Función 4 de CICLOS");
}

// Exportar la función para que esté disponible para otros archivos
module.exports = funcion4;