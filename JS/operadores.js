//OPERANDOS Y OPERADORES
console.log('################### OPERANDOS Y OPERADORES ###################')
//Operando unario
let z = 1; 
z = -z; 
console.log(`El valor de z es ${z}`); // -1, se aplicó negación 

//Operando Binario
let x = 1, y = 3;
console.log(y - x); // 2, binario negativo resta valores 

console.log('############ CONCATENACIÓN #############')
//Según lo visto en la clase anterior, si "2" / 2 = 1, entonces: 
console.log('1' + 2); // "Resultado ???"
console.log(2 + '1'); // "Resultado ???"
console.log(1 + 1 + '2'); // "Resultado ???"
console.log(1 + 1 + '2'); // "Resultado ???"

console.log('################# SUMA UNARIA Y BINARIA ################')
//Suma binaria

//Sin efecto en números 
let manzanas = 2; 
console.log(+manzanas); // Resultado: 1

//Convierte los no números 
console.log(+true); // 1
console.log(+""); // 0
console.log(+"4"); // 4

//¿Qué función hacia lo anterior?

//OPERADOR DIVISIÓN
console.log('######################### OPERADOR DE DIVISIÓN ##########################')
console.log("La división entre los tomates y naranjas es: ", tomates);

//RESTO (%)
console.log('######################### OPERADOR DE RESTO ##########################')
console.log(6 % 2); // 0 es el resto de 6 dividido por 2
console.log(8 % 3); // 2, es el resto de 8 dividido por 3

//POTENCIA (**)
console.log('######################### OPERADOR DE EXPONENCIACIÓN ##########################')
console.log(2 ** 2); // 2^2 = 4
console.log(2 ** 3); // 2^3 = 8
console.log(4 ** (1 / 2)); // 2 (potencia de 1/2 es lo mismo que -)

//Asignaciones Encadenadas 
console.log('######################### ASIGANACIONES ENCADENADAS ##########################')

let a, b, c;
a = b = c = 5 + 5; 

console.log(a); // 10
console.log(b); // 10
console.log(c); // 10

//Modificación en el Lugar
console.log('######################### ASIGANACIONES ENCADENADAS ##########################')


console.log(c); // 10