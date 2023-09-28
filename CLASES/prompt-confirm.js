
//Utilizando el prompt
let edad = prompt('¿Cual es tu edad?', 0);
/*let edad = prompt('¿Cual es tu edad?', '');¨*/ //Contiene un texto a mostrar 
alert(`Tienes ${edad} años!`); //El valor que ingreses

//Utilizando el confirm
let question = confirm('¿Pasaras el ramo?'); //Modal con una pregunta
alert(question); //Si se pulsa aceptar lanzara True, si se pulsa cancelar lanzara False