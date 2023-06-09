/* Un obrero necesita calcular su salario semanal, el cual se obtiene de la siguiente manera: 
Si trabaja 40 horas o menos se le paga $4 por hora. Si trabaja más de 40 horas se le paga $4 por cada una de las primeras 40 horas y $6 por cada hora extra. */

var horas = Number(prompt("Ingrese su salario semanal"))

if (horas < 0 ) {
    alert("Ingrese horas validas");
} else if (horas <= 40) {
    horas = horas * 4;
} else {
    horas = 40 * 4 + (horas - 40) * 6;
}

var salario = horas;
alert(`Tu salario es de: $ ${salario}`);