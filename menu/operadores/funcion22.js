function funcion22() {
console.log('8. La suma de tres números y su promedio:');
    
    // Ingresa los tres números
    let num1 = 12;
    let num2 = 22;
    let num3 = 23;

    // Calcula la suma y el promedio
    let suma = num1 + num2 + num3;
    let promedio = suma / 3;

    // Muestra la suma y el promedio
    console.log('Número 1:', num1);
    console.log('Número 2:', num2);
    console.log('Número 3:', num3);
    console.log('Suma:', suma);
    console.log('Promedio:', promedio);
    console.log("Función 22 de OPERADORES");
}

// Exportar la función para que esté disponible para otros archivos
module.exports = funcion22;