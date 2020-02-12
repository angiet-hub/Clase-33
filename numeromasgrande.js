//Hacer un programa que pida ingresar 2 números, y muestre como resultado el más grande de ellos. 
//Una vez hecho esto, agregar la funcionalidad de que si alguno de los números es igual a otro, 
//debe mostrar un mensaje diciéndolo.

const numero1 = Number(prompt("Ingrese un numero"));
const numero2 = Number(prompt("Ingrese otro número"));

const resultado = numero1 > numero2 && `El ${numero1} es más grande.` || 
    numero1 < numero2 && `El ${numero2} es más grande.`
    || numero1 === numero2 && `Los números son iguales`;

alert(resultado)
