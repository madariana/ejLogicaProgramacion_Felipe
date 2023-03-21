/*
Crear un programa en JS que realice lo siguiente:
Input
Solicitar al usuario 10 números por consola y almacenarlos en un array
Colocar todos los números primos a las primeras posiciones, desplazando el resto al final de forma que ningún número se pierda.
Output
Mostrar por consola el array que contiene los números primos al inicio, mostrando el índice seguido del valor de la posición.
El orden de los números no importa siempre y cuando los números primos se encuentren al inicio del array.

*/

// Crear un array vacío para almacenar los números ingresados
let numeros = [];

// Solicitar al usuario que ingrese 10 números por consola y almacenarlos en el array
for (let i = 0; i < 10; i++) {
  let numero = prompt(`Ingresa el número ${i + 1}:`);
  numeros.push(Number(numero)); // Convertir a número y agregar al array
}

// Función para determinar si un número es primo
function esPrimo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return numero !== 1;
}

// Crear un nuevo array para almacenar los números primos
let primos = [];

// Recorrer el array original y mover los números primos al principio
for (let i = 0; i < numeros.length; i++) {
  if (esPrimo(numeros[i])) {
    primos.unshift(numeros[i]);
  } else {
    primos.push(numeros[i]);
  }
}

// Mostrar el array original con índices
console.log("Array original:");
for (let i = 0; i < numeros.length; i++) {
  console.log(`[${i}] => ${numeros[i]}`);
}

// Mostrar el array de números primos al principio con índices
console.log("Array con números primos al principio:");
for (let i = 0; i < primos.length; i++) {
  console.log(`[${i}] => ${primos[i]}`);
}