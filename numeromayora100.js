//Crear un programa que permita ingresar tres número y muestre si alguno de ellos es mayor a 100.

const numero1 = Number(prompt("Ingrese un número"));
const numero2 = Number(prompt("Ingrese otro número"));
const numero3 = Number(prompt("Ingrese otro número nuevamente"));

const resultado = (numero1 > 100 && "El primer número ingresado es mayor a 100." || "") 
    || (numero2 > 100 && "El segundo número ingresado es mayor a 100." || "") 
    || (numero3 > 100 && "El tercer número ingresado es mayor a 100." || "");

alert(resultado);