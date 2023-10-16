console.log('\n############ FUNCION BASICA ##############')
function mostrarMensaje() {
    alert('¡Hola a todos!');
}

//llamando a la funcion
mostrarMensaje();


console.log('\n############ VARIABLES INTERNAS #############')
function varInterna() {
    let mensaje = "Hola, ¡Soy un Mensaje de una variable local!"; //variable local
    alert(mensaje);
}


varInterna(); //"Hola, ¡Soy un Mensaje de una variable local!"
//alert(mensaje); // ¿¡Error! La variable es local para esta funcion


console.log('\n########### VARIABLES EXTERNAS ###############')
let nombre = 'Victor'; //variable global
function mostrarNombre() {
    let msj = '¡Hola!, ' + nombre;
    alert(msj);
}

mostrarNombre(); //¡Hola!, Victor



//Modificando la Variable Externa
let institucion = 'Ulagos'; //Variable global
function mostrarInstitucion() {
    let institucion = "Universidad de Los Lagos";
    let texto = 'Yo estudio en la ' + institucion;
    alert(texto);
}

//La funcion crea y utiliza su propia variable local institucion 
mostrarInstitucion(); 
alert(institucion); //Ulagos, se mantiene, la función no accedió a la variable externa