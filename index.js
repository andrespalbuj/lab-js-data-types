/*******************************************
    Iteración 1.1 | Trabalenguas
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatena las variables de cadena en una sola nueva cadena
const resultado = s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5 + " " + s3 + " " + s2 + " " + s1 + " " + s4;
console.log (resultado);


// Imprime la cadena concatenada




/*******************************************
    Iteración 1.2 | Cola de camello
*******************************************/
const part1 = "java";
const part2 = "script";

// Convierte la última letra de part1 y part2 a mayúsculas y concatena las cadenas


// Imprime la cadena con el formato camelCase
const inicioPart1 = part1.slice(0, -1)
const ultimaLetra1 = part1.slice(-1).toUpperCase();
const inicioPart2 = part2.slice(0, -1);
const ultimaLetra2 = part2.slice(-1).toUpperCase();

const meGusta = inicioPart1 + ultimaLetra1 + inicioPart2 + ultimaLetra2;
console.log (meGusta);



/*******************************************
    Iteración 2.1 | Calcular propina
*******************************************/
const billTotal = 84;

// Calcula la propina (15% del total de la cuenta)


// Imprime el valor de tipAmount
const porcentaje = billTotal * 15 / 100;
console.log (porcentaje);



/*******************************************
    Iteración 2.2 | Generar número aleatorio
*******************************************/

// Genera un número entero aleatorio entre 1 y 10 (inclusive)


// Imprime el número aleatorio generado
const numero = Math.floor(Math.random() * 10) + 1;
console.log(numero);


/*******************************************
    Iteración 3.1 | Booleanos
*******************************************/

const a = true;
const b = false;

// Intenta adivinar primero el resultado de las siguientes expresiones y anota tus respuestas:
const expression1 = a && b;

const expression2 = a || b;

const expression3 = !a && b;

const expression4 = !(a && b);

const expression5 = !a || !b;

const expression6 = !(a || b);

const expression7 = a && a;
console.log(expression1);
console.log(expression2);
console.log(expression3);
console.log(expression4);
console.log(expression5);
console.log(expression6);
console.log(expression7);