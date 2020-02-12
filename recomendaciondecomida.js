//Crear un programa que pregunte si va el usuario va a almorzar o cenar, y si es vegetariano o no. 
//Dependiendo de las respuestas, debe recomendar un plato (es decir, debe haber cuatro platos posibles).

const comida = prompt("Va a almorzar o cenar?");
const tipoComida = confirm("Es vegetariano?");

const resultado = comida === "cenar" && tipoComida === true && 'Tarta de verduras. Milanesas de soja. Guiso de lentejas'||
                comida === "almorzar" && tipoComida === true && 'Ensalada. Sopa. Tarta de verduras'||
                comida === "cenar" && tipoComida === false && 'Asado. Pollo.'||
                comida === "almorzar" && tipoComida === false && 'Filet de merluza. Rabas';

alert(resultado)
