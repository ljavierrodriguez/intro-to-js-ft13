// Tipos de declaracion de variables (var, let, const)
// (var | let | const) nombreVariable = valor;

/**
 * Tipos de Datos en Javascript
 * 
 * String
 * Number 
 * Boolean
 * Undefined
 * 
 * Object:
 *      Array
 *      Literal Object
 *      Null
 * 
 * function
 */ 
/* var flag = false;

let flag = false;
const PI = 3.1416;

PI = 1; */

let nombre = "Luis"; // string
let apellido = 'Rodriguez'; // string
let direccion = `
Hola, ${nombre} ${apellido}.

Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
Porro deleniti odit obcaecati repellat distinctio ex dolor 
provident fugiat dolore, est itaque sapiente? Eius vitae 
perferendis eveniet in! Iste, cumque error!

Atentamente.

La Gerencia
`; // string

let saludo = "Hola" + " " + "Mundo" // Hola Mundo

let edad = 39; // number
let grados = 21.5; // number
let temperatura = -10; // number 
let saldo = -1.5; // number

let activo = true; // boolean
let soltero = false; // boolean

let genero; // undefined
let years = undefined;

let edad = years - birthday; // SyntaxError birthday is undefined


let valores = ["Hugo", "Paco", "Luis"];
let valores2 = array("Pedro", true, [1, 2], 1, -5, null, {name: 'Luis'});

valores2[5] = "Maria";

let valor = valores2[2]; // [1, 2]
valor[1]; // 2

let valor2 = valores2[2][1]; // 2
valor2; // 2

let persona = {
    nombre: '',
    apellido: '',
    genero: '',
    edad: null
}

let users = null;
let universidad = null;


