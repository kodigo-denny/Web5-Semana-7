/*Un obrero necesita calcular su salario semanal, el cual se obtiene de la siguiente manera: 
Si trabaja 40 horas o menos se le paga $4 por hora. Si trabaja más de 40 horas se le paga $4 por 
cada una de las primeras 40 horas y $6 por cada hora extra.*/

let horas = Number(prompt("Ingrese las horas trabajadas"));


let hora_normal = 4;
let hora_extra = 6;
let salario;
if (horas >= 0 && horas < 41) {
  salario = hora_normal * horas;
} else if (horas > 40) {
  let extra = horas - 40;
  let h_norm = horas - extra;
  salario = extra * hora_extra + h_norm * hora_normal;
} else {
  salario = "Ingreso un valor no valido!";
}

alert(`Su salario semanal es : ${salario}`);