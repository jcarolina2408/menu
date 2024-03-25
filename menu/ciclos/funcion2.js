function funcion2() {
 
for (let i = 0; i <= 100; i++) {
    
    if (i % 2 !== 0) {
        console.log(i); 
    }
}
console.log("Función 2 de CICLOS");
}

// Exportar la función para que esté disponible para otros archivos
module.exports = funcion2;