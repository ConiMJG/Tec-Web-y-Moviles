//Utilizando sentencias if/else
console.log('########## SENTENCIAS IF/ELSE ##########');

let year = prompt('¿En que año se creo JavaScript?', '');
if (year == 1995){
    alert('Correcto, en el año 1995!')
} else {
    alert('Respuesta Incorrecta!') //Cualquier valor excepto 1995
}

//Utilizando sentencias else if
console.log('########## SENTENCIAS ELSE IF ##########');

let edad = prompt('¿A que edad puedes tener licencia?', '');
if (year >= 18){
    alert('Correcto, a partir de los 18 años!')
} else if (edad = 17){
    alert('Correcto, pero no puede manejar solo un menor de 17!')
} else {
    alert('Incorrecto, no puede ser menor de 17 años!')
}