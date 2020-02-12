//Crear un programa que pida adivinar tu cumpleaños ingresando por separado ingresar día, mes y año, 
//en números, y mostrar luego si un mensaje si ha adivinado o no.

const dia = Number(prompt("Adivina mi dia de cumpleaños"));
const mes = Number(prompt("Adivina mi mes de cumpleaños"));
const anio = Number(prompt("Adivina mi año de cumpleaños"));

const resultado = dia === 30 && mes === 04 && anio === 1990 && 'Adivinaste!' ||
'No adivinaste';

alert(resultado)