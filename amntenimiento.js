//Hacer un programa que pregunte por separado si el auto tiene aceite, agua, y neumáticos con presión. 
//Mostrar en un mensaje si tiene que hacer mantenimiento o no si alguna de las respuestas es negativa.

const pregunta1 = confirm("El auto tiene aceite?");
const pregunta2 = confirm("El auto tiene agua?");
const pregunta3 = confirm("Los neumaticos tienen presion?");

const resultado = pregunta1 === true && pregunta2 === true && pregunta3 === true && "No es necesario hacer mantenimiento"
|| "Es necesario hacer mantenimiento";

alert(resultado);