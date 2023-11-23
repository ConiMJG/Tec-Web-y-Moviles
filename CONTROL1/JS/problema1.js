
function Calcular(puntuacion) {
    let nivel = 0.0 + 2;
    let bono= 0 ;
    
    if(Insuficiente <= 0.0){
        nivel = "Insuficiente";
        bono = 250.000 * nivel;

    } else if(Aceptable <= 0.4){
        nivel ="Aceptable";
        bono = 250.000 * nivel;

    } else if(Meritorio <= 0.6){
        nivel = "Meritorio";
        bono = 250.000 * nivel; 

    } else if(Excelente <= 0.8){
        nivel = "Excelente";
        bono = 250.000 * nivel;

    }
    return {nivel,bono};
}

function leerPuntuacion() {
    const puntuacion = parseFloat(prompt("Ingrese su puntuacion: "));

    if (isNaN(puntuacion)) {
      alert("Por favor, ingrese una puntuacion valida.");
    } else {
      const resultado = Calcular(puntuacion);
      if (resultado.nivel) {
        alert(`Su nivel de rendimiento es ${resultado.nivel} y recibiras $${resultado.bono}.`);
      } else {
        alert("Su puntuacion no es suficiente para recibir un bono.");
      }
    }
  }
  
  leerPuntuacion();
  