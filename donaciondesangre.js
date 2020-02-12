//Crear un programa que realice al usuario 3 preguntas: si se ha hecho tatuajes recientemente, 
//si ha tenido o tiene hepatitis, si tiene anemia. 
//Si responde a alguna de ellas afirmativamente, debe mostrar un mensaje que indique si puede o no donar sangre.


const pregunta1 = confirm("Se ha hecho tatuajes recientemente?");
const pregunta2 = confirm("Ha tenido hepatitis?");
const pregunta3 = confirm("Tiene anemia?");

const resultado = (pregunta1 === true || pregunta2 === true || pregunta3 === true) && "Usted NO puede donar sangre" || 
 "Usted puede donar sangre";

alert(resultado);

