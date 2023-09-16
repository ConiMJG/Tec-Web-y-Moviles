var nota1 = parseInt(prompt("Ingresa la nota 1"));
var nota2 = parseInt(prompt("Ingresa la nota 2"));
var nota3 = parseInt(prompt("Ingresa la nota 3"));

promedio = nota1*0.4 + nota2*0.3 + nota3*0.3; 
console.log(promedio)


if(promedio <= 3.95){
    alert (`Su promedio final es:  ${promedio}, está reprobado.`);
} else if(promedio >= 3.95 && promedio <= 4.94){ 
    alert (`Su promedio final es: ${promedio}, tiene derecho a examen.`);
} else if(promedio > 4.94){
    alert(`Su promedio final es: ${promedio}, se encuentra eximido de la asignatura `)
}
