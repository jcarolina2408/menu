function funcion19() {
console.log('5. Escribir un algoritmo que pida el lado de un cuadrado y muestre el valor del área y del perímetro.');
console.log('ingrese un lado del cuadrado:');
let num= 5;

let resultado_p = (num + num + num + num);
let resultado_a = (num * num);
console.log(resultado_p, resultado_a);
console.log("Función 19 de OPERADORES");
}

// Exportar la función para que esté disponible para otros archivos
module.exports = funcion19;