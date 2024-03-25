
function funcion1() {
 

  
for (let i = 1; i <= 100; i++) {
 
    if (i % 3 === 0) {
        console.log(i); 
    }
}
console.log("Función 1 de CICLOS");
}

// Exportar la función para que esté disponible para otros archivos
module.exports = funcion1;