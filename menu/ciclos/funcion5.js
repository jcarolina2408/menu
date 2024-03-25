function funcion5() {
let sumaCuadrados = 0;

for (let i = 1; i <= 100; i++) {


    sumaCuadrados += i * i;
}

console.log("La suma de los cuadrados de los cien primeros números naturales es:", sumaCuadrados);
console.log("Función 5 de CICLOS");
}

// Exportar la función para que esté disponible para otros archivos
module.exports = funcion5;