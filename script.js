/** 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array. **/
let vacio = [];

let numeroAleatorio = [2,5,6,8,9,10,25,34,46,55];
vacio.push(numeroAleatorio);


console.log(vacio);

/** 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array. **/
let vacio1 = [];

for (let i = 0; i < 10; i++) {
  let numeroAleatorio1 = Math.floor(Math.random() * 100) + 1;
  vacio1.push(numeroAleatorio1);
}

console.log(vacio1);

/** 2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, 
 * (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado. **/

let ingresa = prompt (`Ingresa 5 numeros separados por coma:`);

let nuevoArray = ingresa.split (`,`);

console.log(nuevoArray);

/** 3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor 
 * y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo. **/

var numeritos = [10, 40, 30, 20, 15, 5];

var numeritoMayor = Math.max(...numeritos);
var numeritoMenor = Math.min(...numeritos);

console.log("Número mayor:", numeritoMayor);
console.log("Número menor:", numeritoMenor);
/*El uso de los tres puntos en JavaScript se conoce como el operador de propagación (spread operator). En el contexto de la expresión (...numeros),
* el operador de propagación se utiliza para descomponer (o expandir) el arreglo numeros.*/
