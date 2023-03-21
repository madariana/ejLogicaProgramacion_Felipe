/*
Crear un programa en JavaScript que realice lo siguiente:

Input

Solicitar al usuario por input o prompt la temperatura en grados Celcius.
Output

Imprimir por consola o DOM la temperatura ingresada convertida de grados Celsius a grados Farenheit.
Imprimir por consola o DOM la temperatura ingresada convertida de grados Celsius a grados Kelvin.
*/


let tempCelsius = prompt("Introduzca la temperatura en grados Celsius:");


let tempFahrenheit = (tempCelsius * 9/5) + 32;


console.log("La temperatura en grados Fahrenheit es: " + tempFahrenheit);


let tempKelvin = parseInt(tempCelsius) + 273.15;


console.log("La temperatura en grados Kelvin es: " + tempKelvin);