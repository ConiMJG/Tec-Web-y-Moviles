function CalculadoraIMC() {
    var paciente = document.getElementById("nombre").value;
    var peso = parseFloat(document.getElementById("peso").value);
    var estatura = parseFloat(document.getElementById("altura").value) / 100; // Convertir altura a metros
    var genero = document.getElementById("genero").value;
    var actividadFisica = parseFloat(document.getElementById("nivel").value);


    document.getElementById("h1").textContent ='Resultados para '+ paciente;

    if (!paciente || isNaN(peso) || isNaN(estatura)){
        alert(`Completar formulario`);
        return;
    }
    if (peso < 20 || peso > 200) {
        alert('Por favor, introduzca un peso válido entre 20kg y 200kg.');
        return;
    }
    
    if (estatura < 1 || estatura > 2.5) {
        alert('Por favor, introduzca una altura válida entre 100cm y 250cm.');
        return;
    }
    

    var estaturaCuad = estatura ** 2;
    var indiceMasaCorporal = peso / estaturaCuad;
    var clasificacion = '';
    var mensaje = '';

    if (indiceMasaCorporal < 18.5) {
        clasificacion = `Bajo peso`;
        mensaje = `Necesita atención especializada`;
    } else if (indiceMasaCorporal < 24.9) {
        clasificacion = `Peso Normal`;
        mensaje = `Estado Nutricional adecuado`;
    } else if (indiceMasaCorporal < 30) {
        clasificacion = `Sobrepeso`;
        mensaje = `Necesita atención especializada`;
    } else {
        clasificacion = `Obesidad`;
        mensaje = `Necesita atención especializada`;
    }

    var gastoEnergetico = actividadFisica * peso; 

    document.getElementById("imc").innerText = indiceMasaCorporal.toFixed(2);
    document.getElementById("clasificacion").innerText = clasificacion;
    document.getElementById("gastoEnergetico").innerText = gastoEnergetico.toFixed(2);
    document.getElementById("mensaje").innerText = mensaje;

}

