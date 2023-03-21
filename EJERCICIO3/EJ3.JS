/*

Instrucciones
Crear un programa en JavaScript que realice lo siguiente:

Input

Solicitar por prompt o input un número.
Output

Imprimir por consola o DOM el factorial del número recibido.

Consideraciones
Identificar si los números ingresados son de tipo number, en caso contrario debe mostrarse un mensaje de error y volver a solicitar los datos.
El factorial de un número es igual al producto de todos los números enteros positivos desde el 1 hasta dicho número, ejemplo 4! = 1x2x3x4=24.
Recuerda convertir a number el valor solicitado por prompt y verificar que sea un número para evitar errores en tu programa.
Recuerda que para mostrar mensajes por consola o por el DOM, debes crear un archivo HTML y enlazar tu script.
*/

let num;
do {
  num = prompt("Introduzca un número positivo:");
} while (isNaN(num) || num < 0);
num = parseInt(num);
let factorial = 1;
for (let i = 2; i <= num; i++) {
  factorial *= i;
}
console.log("El factorial de " + num + " es " + factorial);