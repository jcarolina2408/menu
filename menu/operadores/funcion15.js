function funcion15() {

console.log('1. calcular el area de un triangulo: ');
console.log('ingrese la base:');
let base = 10;
console.log('ingrese la altura: ');
let altura = 15;

let resultado = (base * altura) /  2;

console.log(resultado);

console.log("Función 15 de OPERADORES");
}

// Exportar la función para que esté disponible para otros archivos
module.exports = funcion15;