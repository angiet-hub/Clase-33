//Hacer un programa que pida ingresar los valores de los tres parciales de la cátedra mostrar un mensaje indicando 
//si promociona o no la cátedra. La misma se promociona si al menos dos de ellos fueron aprobados con una nota 
//de 8 o más.

const parcial1 = Number(prompt("Ingrese el resultado del primer parcial"));
const parcial2 = Number(prompt("Ingrese el resultado del segundo parcial"));
const parcial3 = Number(prompt("Ingrese el resultado del tercer parcial"));

const resultado = parcial1 >= 8 && parcial2 >= 8 && "Promociona" ||
parcial2 >= 8 && parcial3 >= 8 && "Promociona" ||
parcial1 >= 8 && parcial3 && "Promociona" ||
"No promociona";

alert(resultado);