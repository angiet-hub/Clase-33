//Crear un programa que sea un cuestionario con 3 preguntas de sí o no. Al finalizar, mostrar un mensaje de 
//felicitaciones si se respondió bien a todas, o uno de que ha perdido el juego si respondió mal al menos una.

const respuesta1 = confirm("La tierra es redonda?");
const respuesta2 = confirm("El agua moja?");
const respuesta3 = confirm("El sol quema?");

const resultado = respuesta1 === true && respuesta2 === true && respuesta3 === true && 'Felicitaciones!' ||
'Usted ha perdido el juego';

alert(resultado)