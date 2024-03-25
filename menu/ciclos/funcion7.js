function funcion7() {
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumarNumeros() {
    let suma = 0;

   function leerNumero() {
        rl.question('Ingresa un número (ingresa 0 para terminar): ', (input) => {
            const numero = parseInt(input);

            if (numero !== 0 && !isNaN(numero)) {
                suma += numero;
                leerNumero(); 
            } else {
                console.log('La suma total es:', suma);
                rl.close(); 
            }
        });
    }

    leerNumero(); 
}

sumarNumeros();
console.log("Función 7 de CICLOS");
}

// Exportar la función para que esté disponible para otros archivos
module.exports = funcion7;