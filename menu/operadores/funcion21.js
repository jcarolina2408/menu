function funcion21() {
console.log('7.Realizar un algoritmo que lea el radio de una circunferencia y escriba la longitud de la misma y el área (pi*r)^2 del círculo inscrito.');
console.log('ingrese el area de la circunferencia:');
let num= 3;

let resultado_a = (3.14 * num * num);
let resultado_l = (2*3.14 * num );

console.log(resultado_a,resultado_l);
console.log("Función 21 de OPERADORES");
}

// Exportar la función para que esté disponible para otros archivos
module.exports = funcion21;