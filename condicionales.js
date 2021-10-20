let a = 15;
let b = 10;
let c = 7;
let d = 9;

if (a < b) { // true
    // sentencias que se ejecutan si la condicion es verdadera
    console.log("A es mayor que B");
}

if (a > b) { // true
    // sentencias que se ejecutan si la condicion es verdadera
    console.log("A es mayor que B");
} else { // false
    // sentencias que se ejecutan si la condicion es falsa
    console.log("B es mayor que A");
}


if (a > b) {
    // a
} else if (a > c) {
    // b
} else if (a > d) {
    // c
} else {
    // d
}

if (a > b) { // true
    // sentencias que se ejecutan si la condicion es verdadera
    console.log("A es mayor que B");
}

if (a > c) { // true
    // sentencias que se ejecutan si la condicion es verdadera
    console.log("A es mayor que C");
}

let option = 3;

switch (option) {
    case 1:
        // sentencia a ejecutar
        break;
    case 2:
        // sentencia a ejecutar
        break;

    default:
        // sentencia a ejecutar 
        break;
}

/* if (a > b) {
    // a
} else if (a > c) {
    // b
} else if (a > d) {
    // c
} else {
    // d
} */

switch (true) {
    case a > b:
        console.log("A");
        break;
    case a > c:
        console.log("A");
        break;
    case a > d:
        console.log("A");
        break;
    default:
        console.log("Ninguna de las anteriores");
        break;
}

console.log(Math.round(4.5)); // 5
console.log(Math.floor(4.1)); // 4
console.log(Math.ceil(4.5)); // 5

//console.log(Math.sqrt(9));

//console.log(Math.min(1, 2, 3));

//console.log(Math.floor(Math.random() * 5)); // 0 - 4

//console.log(Math.floor(Math.random() * 5) + 1); // 1 - 5


let min = 50;
let max = 100;

console.log(Math.floor(Math.random() * (max - min + 1) + min));


console.log(Math.PI);