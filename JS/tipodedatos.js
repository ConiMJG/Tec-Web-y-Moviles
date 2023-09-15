//NUMBERS
let add = 29; 
let sueldo = 120000; 
const PI = 3.14;

//Con Notación Cientifica
const x = 1000000; 
const n_grande = 1e6; // 1 millón
const n_pequeno = 1e-6;  // 0.000001

console.log(n_grande)
console.log(n_pequeno)

//BigInt
const bigInt = 123456789123456789123456789123456789n;
console.log(bigInt)

//Infinity
console.log(edad / 0);

//¿Es posible esto?
console.log("2"/2);

//NaN (Error de Cálculo)
console.log("Hola" / 2); // NaN, tal división es errónea
console.log("Hola" * 4);

//STRINGS
console.log('######################## STRINGS #########################')
let nombre = "Constanza"
let ciudad = "Osorno"
let capital = "Puerto Montt"
let string1 = "Hola ¿Cómo estás?";
let string2 = '¡Buenas Tardes!';
let frase = 'Estte es un saludo: ${string1}'; //Backticks

//Impresión de Variables dentro de Strings

//Impresión utilizando Backticks
console.log(frase)

//Utilizando el operador + de concatenación
console.log(ciudad + "y" + capital + "pertenecen a la Región de Los Lagos")

//Operador con comas
console.log(capital, "es la capital de la Región de Los Lagos")

//Utilizando el Método concat
console.log("Mi nombre es " .concat(nombrre, "y vivo en ", ciudad))

//BOOLEANS
//Asignación de booleanos a variables
console.log('############## BOOLEANS  ########' )
let V = true;
let F = false; 

//Ejemplo de un ciclo:
if (V) {
    //Se ejecuta si el valor es True
    console.log("Es verdadero"); 

} else {
    //Se ejecuta si el valor es false
    console.log("Es falso");
}

//NULL
console.log('#########NULL#############')
let numero_nuevo = null
console.log(numero_nuevo)


//UNDEFINED
console.log('########### UNDEFINED ################')
let institución; 
console.log(institución) //arroja como valor undefined 


//OBJECT Y SYMBOL
//Almacenan colecciones de datos

//Hay 2 formas de crear un objeto 
console.log('############ OBJETOS ##########')
let user = new Object(); //sintaxis de "constructor de objetos"
let user1 = {}; // sintaxis de "objeto literal"

//Objeto literal
let usuario = {              // un objeto
    name: "Mateo",           // En la clave "name" se almacena el valor "Mateo"
    age: 30,                 // En la clave "age" se almacena el valor 30
    city: "Osorno",          // En la clave "city" se almacena el valor "Osorno"
    "correo electronico": "mateo@gmail.com" // Se puede agregar claves con espacios utilizando
}


//Agregando una propiedad nueva al objeto literal (en este caso un Booleano)
usuario.estado = true;
usuario.pais = "Chile";
usuario.genero = "Masculino";

//Accediendo a una propiedad del objeto (No sirve para acceder a propiedad de más de 2 palabras)
console.log(usuario);

//Accediendo a una propiedad con más de 2 palabras en su clave 
console.log(usuario["correo electronico"]);

//Eliminando una propiedad del objeto 
delete usuario.estado;

console.log(usuario);

//Si deseo saber el tipo de dato
console.log('############# SABER EL TIPO DE DATO ################')
console.log(typeof nombre1);

//Transformar un dato a String 
//Transformando la variable edad de Number a String
console.log('############## TRANSFORMANDO DE STRING A NUMBER ################')
console.log(typeof edad);
edad = string(edad)
console.log(typeof edad)


//Transformar un dato a number
let stock = "1000"

console.log('############### TRANSFORMANDO DE NUMBER A STRING ##################')
console.log(typeof stock)

console.log(stock)
stock = Number(stock)
console.log(typeof stock)
console.log(stock)
    