const readline = require('readline');
const path = require('path');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Importar las funciones de los archivos
const funcion1Ciclos = require('./Ciclos/funcion1');
const funcion2Ciclos = require('./Ciclos/funcion2');
const funcion3Ciclos = require('./Ciclos/funcion3');
const funcion4Ciclos = require('./Ciclos/funcion4');
const funcion5Ciclos = require('./Ciclos/funcion5');
const funcion6Ciclos = require('./Ciclos/funcion6');
const funcion7Ciclos = require('./Ciclos/funcion7');
const funcion8Condicionales = require('./Condicionales/funcion8');
const funcion9Condicionales = require('./Condicionales/funcion9');
const funcion10Condicionales = require('./Condicionales/funcion10');
const funcion11Condicionales = require('./Condicionales/funcion11');
const funcion12Condicionales = require('./Condicionales/funcion12');
const funcion13Condicionales = require('./Condicionales/funcion13');
const funcion14Condicionales = require('./Condicionales/funcion14');
const funcion15Operadores = require('./Operadores/funcion15');
const funcion16Operadores = require('./Operadores/funcion16');
const funcion17Operadores = require('./Operadores/funcion17');
const funcion18Operadores = require('./Operadores/funcion18');
const funcion19Operadores = require('./Operadores/funcion19');
const funcion20Operadores = require('./Operadores/funcion20');
const funcion21Operadores = require('./Operadores/funcion21');
const funcion22Operadores = require('./Operadores/funcion22');

function mostrarMenu() {
    console.log("Seleccione una opción:");
    console.log("1. Función 1 de la carpeta 'Ciclos'");
    console.log("2. Función 2 de la carpeta 'Ciclos'");
    console.log("3. Función 3 de la carpeta 'Ciclos'");
    console.log("4. Función 4 de la carpeta 'Ciclos'");
    console.log("5. Función 5 de la carpeta 'Ciclos'");
    console.log("6. Función 6 de la carpeta 'Ciclos'");
    console.log("7. Función 7 de la carpeta 'Ciclos'");
    console.log("8. Función 8 de la carpeta 'Condicionales'");
    console.log("9. Función 9 de la carpeta 'Condicionales'");
    console.log("10. Función 10 de la carpeta 'Condicionales'");
    console.log("11. Función 11 de la carpeta 'Condicionales'");
    console.log("12. Función 12 de la carpeta 'Condicionales'");
    console.log("13. Función 13 de la carpeta 'Condicionales'");
    console.log("14. Función 14 de la carpeta 'Condicionales'");
    console.log("15. Función 15 de la carptea 'Operadores'");
    console.log("16. Función 16 de la carptea 'Operadores'");
    console.log("17. Función 17 de la carptea 'Operadores'");
    console.log("18. Función 18 de la carptea 'Operadores'");
    console.log("19. Función 19 de la carptea 'Operadores'");
    console.log("20. Función 20 de la carptea 'Operadores'");
    console.log("21. Función 21 de la carptea 'Operadores'");
    console.log("22. Función 22 de la carptea 'Operadores'");
    console.log("0. Salir");

    rl.question("Selecciona una opción: ", (opcion) => {
        switch(opcion) {
            case '1':
                funcion1Ciclos();
                mostrarMenu();
                break;
            case '2':
                funcion2Ciclos();
                mostrarMenu();
                break;
            case '3':
                funcion3Ciclos();
                mostrarMenu();
                break;  
            case '4':
                funcion4Ciclos();
                mostrarMenu();
                break;  
            case '5':
                funcion5Ciclos();
                mostrarMenu();
                break; 
            case '6':
                funcion6Ciclos();
                mostrarMenu();
                break;  
            
            case '7':
                funcion7Ciclos();
                mostrarMenu();
                break;   
                 
                case '8':
                    funcion8Condicionales();
                    mostrarMenu();
                    break;

                case '9':
                    funcion9Condicionales();
                    mostrarMenu();
                    break;

                case '10':
                    funcion10Condicionales();
                    mostrarMenu();
                    break;

                 case '11':
                funcion11Condicionales();
                mostrarMenu();
                break;

                 case '12':
                funcion12Condicionales();
                mostrarMenu();
                break;

                 case '13':
                funcion13Condicionales();
                mostrarMenu();
                break;
                 case '14':

                funcion14Condicionales();
                mostrarMenu();
                break;
            case '15':
                
                funcion15Operadores();
                mostrarMenu();
                break;

            case '16':
                funcion16Operadores();
                mostrarMenu();
                break;
            case '17':
                funcion17Operadores();
                mostrarMenu();
                break;
            case '18':
                funcion18Operadores();
                mostrarMenu();
                break;
            case '19':
                funcion19Operadores();
                mostrarMenu();
                break;
            case '20':
                funcion20Operadores();
                mostrarMenu();
                break;
            case '21':
                funcion21Operadores();
                mostrarMenu();
                break;
            case '22':
                funcion22Operadores();
                mostrarMenu();
                break;
            case '0':
                console.log("Saliendo del programa...");
                rl.close();
                break;
            default:
                console.log("Opción inválida. Por favor, selecciona una opción válida.");
                mostrarMenu();
        }
    });
}

mostrarMenu();
