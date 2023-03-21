/*
Crear un programa en JS que realice lo siguiente

Crear un diccionario Español-Inglés, que contenga al menos 20 palabras con su respectiva traducción

Utiliza un objeto HashMap para almacenar pares de palabras

Input

Solicitar a usuario una palbra en español
Output

Mostrar por consola la palabra en inglés
En caso de no encontrar su traducción en el diccionario, debe imprimir un mensaje indicándolo

*/

let diccionario = new Map();
diccionario.set("casa", "house");
diccionario.set("perro", "dog");
diccionario.set("gato", "cat");
diccionario.set("libro", "book");
diccionario.set("mesa", "table");
diccionario.set("silla", "chair");
diccionario.set("agua", "water");
diccionario.set("sol", "sun");
diccionario.set("luna", "moon");
diccionario.set("comida", "food");
diccionario.set("ropa", "clothes");
diccionario.set("coche", "car");
diccionario.set("bici", "bike");
diccionario.set("tren", "train");
diccionario.set("avión", "plane");
diccionario.set("maleta", "suitcase");
diccionario.set("computadora", "computer");
diccionario.set("teléfono", "phone");
diccionario.set("televisión", "television");
diccionario.set("juego", "game");


let palabra = prompt("Introduzca una palabra en español:");


if (diccionario.has(palabra)) {
  console.log("La traducción de " + palabra + " es " + diccionario.get(palabra));
} else {
  console.log("No se encontró la traducción de " + palabra);
}