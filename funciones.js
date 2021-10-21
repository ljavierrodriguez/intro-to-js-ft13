function functionName() {
    // sentencias a ejecutar
}

functionName();





/* function suma() {
    return [...arguments].reduce((total, valor) => total + valor, 0);
}


console.log(suma(1, 2, 3, 4));

console.log(suma(1, 2)); */


function saludo(name = 'John', lastname){
    return `Hola, ${name} ${lastname}`;
}

console.log(saludo("Juarez"));


/* function suma(a , b){
    return a + b;
} */

const suma = function(a , b){
    return a + b;
}

console.log(suma(3, 5));


const resta = (a , b) => a - b;



function menu(option){
    switch (option) {
        case 1:
            return "Atencion al cliente";
        case 2:
            return "Reclamos y Sugerencias";
        case 3: 
            return "Hablar con el operador";
        default:
            return "No ha indicado una opcion valida";
    }
}

console.log(menu(4))
console.log(menu(2))