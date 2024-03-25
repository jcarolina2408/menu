function funcion8() {
// Solicitar al usuario que ingrese un número
console.log('ingrese un numero:');
let num = 10;
// Verificar si el número es positivo, negativo o cero
if (num > 0) {
    console.log("El número ingresado es positivo");
} else if (num < 0) {
    console.log("El número ingresado es negativo");
} else {
    console.log("El número ingresado es cero");
}
console.log("Función 8 de CONDICIONALES");
}

// Exportar la función para que esté disponible para otros archivos
module.exports = funcion8;