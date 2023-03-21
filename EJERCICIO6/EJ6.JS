/*
Crear un programa en JS que realice lo siguiente:

Input

Solicitar por consola una palabra o frase
Output

Mostrar por consola el texto ingresado de forma invertida.
*/

const texto = prompt("Introduce una palabra o frase:");
let textoAlReves = "";

for (let i = texto.length - 1; i >= 0; i--) {
  textoAlReves += texto[i];
}

console.log(textoAlReves);