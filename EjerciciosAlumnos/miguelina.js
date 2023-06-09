/*
Un obrero necesita calcular su salario semanal, el cual se obtiene
 de la siguiente manera: Si trabaja 40 horas o menos se le paga $4 
 por hora. Si trabaja más de 40 horas se le paga $4 por cada una de 
 las primeras 40 horas y $6 por cada hora extra.
*/

let horas = Number(prompt("Ingrese horas de trabajo"));
let salarioSemanal;

if (horas <= 40) {
    salarioSemanal = horas * 4;
} else {
    let horasExtras;
    let horasNormal = 40 * 4;
    horasExtras = (horas - 40) * 6;
    salarioSemanal = horasNormal + horasExtras;
}

alert(`El salario semanal es:  ${salarioSemanal}`);