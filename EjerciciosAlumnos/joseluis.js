/*
Un obrero necesita calcular su salario semanal, el cual se obtiene
 de la siguiente manera: Si trabaja 40 horas o menos se le paga $4 
 por hora. Si trabaja más de 40 horas se le paga $4 por cada una de 
 las primeras 40 horas y $6 por cada hora extra.
*/

let horas = parseInt(prompt('ingresa tus horas laboradas'));
    extras
    salario   
    hora_normal = 4;
    hora_extra = 6;

if (horas <=  40) {
    horas = horas * hora_normal;
    
} else {
    extras = horas - 40;
    extras = extras * hora_extra;
    salario = (40 * hora_normal) + extras;   
    
}

alert(`tu salario total es de: ${salario}`);