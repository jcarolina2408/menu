function funcion3() {
for (let i = 1; i <= 100; i++) {
   
    if (i % 2 === 0) {
        console.log(i); 
    }
}
console.log("Función 3 de CICLOS");
}

// Exportar la función para que esté disponible para otros archivos
module.exports = funcion3;