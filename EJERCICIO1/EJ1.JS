/*Crear un programa en JavaScript que realice lo siguiente:

Input

Solicitar por prompt tres datos y guardarlos en sus respectivas variables.
Output

Mostrar los números por consola o DOM ordenados de mayor a menor, y de menor a mayor.
Mostrar un mensaje en consola o por el DOM si los números son iguales.
*/

let num1 = prompt("Introduzca el primer número:");
let num2 = prompt("Introduzca el segundo número:");
let num3 = prompt("Introduzca el tercer número:");


num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);
let numsMayorMenor = [num1, num2, num3];
numsMayorMenor.sort(function(a, b){return b - a});
console.log("Los números ordenados de mayor a menor son: " + numsMayorMenor);

let numsMenorMayor = [num1, num2, num3];
numsMenorMayor.sort(function(a, b){return a - b});

console.log("Los números ordenados de menor a mayor son: " + numsMenorMayor);

if (num1 === num2 && num2 === num3) {
  console.log("Los números son iguales.");
} else {
  console.log("Los números no son iguales.");
}