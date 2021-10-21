/**
 * Javascript Loops
 * 
 * loop: for 
 * loop: for in
 * loop: for of
 * loop: while
 * loop: do while
 * 
 * Syntax: 
 * 
 * for:
 * 
 *  for(counter; condition; increment){
 *      // sentences to execute
 *  }
 * 
 *  
 */

// 1.- Inicializa el contador (num = 1)
// 2.- Evalua la condicion (num <= 10)
// 3.- Ejecuta las lineas de codigo dentro del ciclo (console.log(num))
// 4.- Incrementa el contador y repite desde el paso 2

for(let num = 1; num <= 10; num=num+2){
    console.log(num);
} // 1 2 3...9 10 

let nombres = ["Antonio", "Andres", "Sergio", "Arian", "Luis", "Diego", "Nehemias", "Manuel", "Alfredo", "Miguel", "Juan"];

for(let pos=0; pos <= nombres.length - 1; pos++){
    console.log(nombres[pos]);
}
for(let pos=0; pos < nombres.length; pos++){
    console.log(nombres[pos]);
}
for(let pos=nombres.length - 1; pos >= 0; pos--){
    console.log(nombres[pos]);
}
//console.log(pos) // undefined

for(let i = 1; i<=10; i++){
    console.log(i);
}
//console.log(i) // 11


/**
 * 
 * for in:
 * 
 * for(let index in array){
 * // sentences to execute
 * }
 * 
 */

for(let i in nombres){
    console.log(i);
    //console.log(nombres[i]);
} // 0 1 2 3 4 5 6 7 8 9 10


/**
 * 
 * for of:
 * 
 * for(let value of array){
 * // sentences to execute
 * }
 * 
 */
let nombresConLetraA = [];
for(let value of nombres){
    console.log(value);
    if(value.toLowerCase().includes('a')) nombresConLetraA.push(value);
} // antonio, andres, sergio ....

console.log(nombresConLetraA);

/**
 * while:
 * 
 * while(condition){
 *  //sentences to execute
 * }
 */

let i = 1;
while(i <= 10){
    console.log(i);
    i++;
}

let j = 0;
while(j < nombres.length){
    console.log(nombres[j]);
    j++;
}

/**
 * do while:
 * 
 * do {
 *  // sentences to execute
 * } while (condition)
 * 
 */

let k = 10;
do {
    console.log(k);
    k++;
} while (k <= 10); // 1 2 3 4 5 ... 10


console.log("Hola");