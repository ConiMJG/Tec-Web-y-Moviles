 //Ciclo while 
 console.log('############# WHILE #############')
 let i = 0;

 while (i <= 5){
    console.log(i);
    i ++;
}


//Ciclo do-While
console.log('\n############ DO-WHILE ##############')
let aux = 0;
do {
    console.log(aux);
    aux++;
}
while (aux <= 3);


//Ciclo For
console.log('\n########## FOR ###############')
for (let x = 1; x <= 3; x++){
    console.log(x);
}


//Ciclo For 
console.log('\n########### OMISIONES DE PARTES EN FRO #############')
let j = 0;
for (; j <= 7; j++) {
    console.log(j);
}

for (; j <= 7;){
    console.log(j++);
}


console.log('\n############## USO DEL BREAK ##################')
let suma = 0;
while (true) {
    let valor = +prompt("Ingrese un numero, por favor", '');
    if (!valor) break;  //Quiebre del ciclo
    suma += valor;
}
alert (`La suma es de: ${suma}`);


console.log('\n############### USO DEL CONTINUE ###########')
for (let i = 0; i < 10; i++) {
    if (i % 2,0) continue; // (i % 2=0) 
    alert (i); //1, luego 3, 5, 7, 9 (solo imapres) 
}


