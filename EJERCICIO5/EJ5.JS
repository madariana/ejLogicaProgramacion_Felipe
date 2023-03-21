/*
Crear un programa en JavaScript que realice lo siguiente:

Pedir al usuario por prompt o input un número del 1 al 100 para adivinar un número secreto.

Input

El dato ingresado por el usuario (número del 1 al 100).
Output

Imprimir por consola o DOM un mensaje diciendo "Ups, el número secreto es incorrecto, vuelve a intentarlo." y volver a solicitarle que ingrese un número, en caso de no adivinar el número secreto.
Imprimir por consola o DOM un mensaje diciendo "Felicidades, adivinaste el número secreto." en caso de adivinar el número secreto.
Imprimr por consola o DOM la lista de númros introducidos antes de adivinar el número secreto.
*/

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Le pedimos al usuario que adivine el número
let intentos = 0;
let adivinanza;

do {
  adivinanza = parseInt(prompt("Adivina el número secreto (entre 1 y 100):"));
  intentos++;

  if (adivinanza === numeroSecreto) {
    console.log(`¡Felicidades, adivinaste el número en ${intentos} intentos!`);
  } else {
    console.log("Ups, el número secreto es incorrecto. Vuelve a intentarlo.");
  }
} while (adivinanza !== numeroSecreto);