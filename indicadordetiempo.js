//Crear un programa que pida ingresar la temperatura del día e indique qué tiempo hace dependiendo de la misma 
//(p. ej.: "Hace frío", "Está templado", etc.). Hacerlo para 3 posibles casos mínimo.

const temperatura = Number(prompt("Ingrese la temperatura"));

const resultado = temperatura < 18 && 'Hace frio' ||
temperatura >= 18 && temperatura < 23 && 'Está templado' ||
temperatura >= 23 && 'Hace calor';

alert(resultado)