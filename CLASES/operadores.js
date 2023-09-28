//Operadores y Operandos
console.log('########## OPERADORES Y OPERANDOS ##########');

//Operando Unario
let z =1;
z=-z;
console.log(`El valor de z es ${z}`); //-1, se aplico negación

//Operando Binario
let x = 1, y = 3;
console.log(y - x); //2, binario negativo resta valores

console.log('########## CONCATENACION CON EL BINARIO + ##########');
//Segun lo visto en la clase anterios, Si "2"/2=1, entonces:
console.log('1' + 2); //"Resultado ???"
console.log(2 + '1'); //"Resultado ???"
console.log(1 + 1 + '2'); //"Resultado ???"
console.log('2' + 1 + 1); //"Resultado ???"

console.log('########## }SUMA UNARIA Y SUMA BINARIA ##########');
//Suma Unaria

//Sin efecto en numeros
let manzanas = 2;
console.log(+manzanas); //Resultado: 1

//Convierte los no numeros
console.log(+true); //1
console.log(+false); //0
console.log(+""); //0
console.log(+"4"); //4

//¿Que función hacia lo anterior?

console.log('########## OPERADOR SUMA ##########');
let tomates = 30;
let naranjas = 20;
console.log("La Suma entre los tomates y naranajas es ", tomates + naranjas);

console.log('########## OPERADOR MULTIPLICACION ##########');
let tomates1 = 5;
let naranjas2 = 20;
console.log("La Multiplicación entre los tomates y naranajas es ", tomates * naranjas);

console.log('########## OPERADOR RESTA ##########');
let tomates3 = 55;
let naranjas4 = 20;
console.log("La resta entre los tomates y naranajas es ", tomates - naranjas);

console.log('########## OPERADOR DIVISION ##########');
let tomates5 = 55;
let naranjas6 = 20;
console.log("La division entre los tomates y naranajas es ", tomates / naranjas);

console.log('########## OPERADOR POTENCIA ##########');
let tomates7 = 55;
let naranjas8 = 20;
console.log("La potencia entre los tomates y naranajas es ", tomates ** naranjas);
console.log(6 ** 2);

console.log('########## OPERADOR RESTO ##########');
let tomates9 = 55;
let naranjas10 = 20;
console.log("El residuo entre los tomates y naranajas es ", tomates % naranjas);
console.log(6 % 2);

//Asignaciones encadenadas
console.log('########## ASIGNACIONES ENCADENADAS ##########');
let a, b, c;
a = b = c = 5 + 5

console.log(a); //10
console.log(b); //10
console.log(c); //10

//Modificacion en el lugar 
console.log('########## MODIFICACION/ASIGNACION VARIABLES ##########');
let n = 1;
n = n + 9; //10

console.log(n);

n += 5; //ahora n = 15 (es igual a n = n + 5)
console.log("El Valor actualizado de n es: ", n);

n *= 2; //ahora n = 30 (es igual a n = n * 2)
console.log("El Valor actualizado de n es: ", n);

console.log('########## INCREMENTO ##########');
let contador = 1;
contador++; // funciona como contador = contador + 1 
console.log(contador); //2

console.log('########## DECREMENTO ##########');
contador--; // funciona como contador = contador - 1 
console.log(contador); //1