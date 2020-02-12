//Crear un programa que pida ingresar el usuario y la contraseña y los compare con el usuario y contraseña 
//guardados en variables, y muestre en un mensaje si tiene el acceso autorizado.

const usuario = prompt("Ingrese su nombre de usuario");
const contrasena = prompt("Ingrese su contraseña");

const resultado = usuario === "Angie" && contrasena === "1234" && "Acceso autorizado" ||
"acceso denegado";

alert(resultado);
