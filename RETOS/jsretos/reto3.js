function calcularpropina() {
    var boleta = parseInt(document.getElementById("monto").value);
    var porcentaje = parseInt(document.getElementById("porcentaje").value);

    if (isNaN(boleta) || isNaN(porcentaje)){
        alert(`Ingrese un valor válido.`)
    }

    var propina = (boleta * porcentaje) / 100;
    var total = boleta + propina;

    var propinadiv = document.getElementById("propina")
    propinadiv.innerHTML = `<p>Propina: `+ propina.toFixed(2) + ` Clp</p>`;

    var totaldiv = document.getElementById("total")
    totaldiv.innerHTML = `<p>Total a pagar :`+ total.toFixed(2) + ` Clp</p>`;
}