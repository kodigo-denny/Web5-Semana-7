/*
Un obrero necesita calcular su salario semanal, el cual se obtiene
 de la siguiente manera: Si trabaja 40 horas o menos se le paga $4 
 por hora. Si trabaja más de 40 horas se le paga $4 por cada una de 
 las primeras 40 horas y $6 por cada hora extra.
*/

var horas = Number(prompt("Ingrese horas trabajadas"))
var salario;

if (horas <= 40) {
    salario = horas * 4;
}

else {
    var HorasExtra = horas - 40;
    HorasExtra =  HorasExtra * 6;
    salario = (40 * 4) + HorasExtra;
    
}

alert(`El salario semanal es de: ${salario}`);