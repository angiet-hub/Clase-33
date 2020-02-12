//Un club tiene las siguientes reglas: sólo pueden entrar miembros que tengan la cuota al día, o no miembros que 
//tengan autorización. Hacer un programa que pregunte estas si es miembro, si tiene la cuota al día y si tiene 
//autorización y muestre luego un mensaje indicando si tiene el acceso permitido o no.

const pregunta1 = confirm("Tiene la cuota al dia?");
const pregunta2 = confirm("Es miembro?");
const pregunta3 = confirm("Tiene autorizacion?");

const resultado = pregunta1 === true && pregunta2 === true && pregunta3 === true && "Acceso permitido" ||
"Acceso denegado";

alert(resultado);