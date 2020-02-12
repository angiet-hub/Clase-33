//Crear un programa que pida al usuario ingresar un número que represente el límite inferior del rango, 
//uno que represente el límite mayor, y luego otro cualquiera y mostrar en un mensaje si el último número 
//se encuentra dentro del rango ingresado.

const limiteInferior = Number(prompt("Ingrese el limite inferior"));
const limiteMayor = Number(prompt("Ingrese el limite mayor"));
const numero = Number(prompt("Ingrese un número"));

const resultado = (numero >= limiteInferior && numero <= limiteMayor) && "El número se encuentra dentro del rango" || 
"El número no se encuentra dentro del rango";

alert(resultado);
