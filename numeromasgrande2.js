//Hacer un programa que pida ingresar 3 números, y muestre como resultado el más grande de ellos. 
//Una vez hecho esto, agregar la funcionalidad de que si alguno de los números es igual a otro, 
//debe mostrar un mensaje diciéndolo.

const numero1 = Number(prompt("Ingrese un numero"));
const numero2 = Number(prompt("Ingrese otro numero"));
const numero3 = Number(prompt("Ingrese otro numero mas"));

const resultado = (numero1 > numero2 && numero1 > numero3) && `El ${numero1} es el numero mas grande`|| 
    (numero2 > numero2 && numero2 > numero3) && `El ${numero2} es el numero mas grande`|| 
    (numero3 > numero2 && numero3 > numero1) && `El ${numero3} es el numero mas grande` ||
    (numero1 === numero2 || numero2 === numero3 || numero1 === numero3) && `Dos numeros son iguales`;

alert(resultado);
