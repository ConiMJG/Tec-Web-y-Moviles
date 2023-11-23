function contarLetraEnFrase(frase, letra) {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
      if (frase[i] === letra) {
        contador++;
      }
    }
    return contador;
  }
  const frase = prompt("Ingresar una frase:   ");
  const letra = promp ("Ingresar una letra:   "); 
  
if (letra.length !==1){
    alert("Ingrese una unica letra.");
}   else{
    const cantidad = contarLetraEnFrase(frase, letra);
    alert(`La letra "${letra}" aparece ${cantidad} veces en la frase.`);
}


















  