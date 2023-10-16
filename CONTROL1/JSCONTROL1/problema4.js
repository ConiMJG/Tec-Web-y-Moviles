function CalcularIVA(cantidadSinIVA, porcentajeIVA = 19.5){
    if (porcentajeIVA < 0 || porcentajeIVA > 100) {
        throw new Error("El porcentaje de IVA debe estar entre 0 y 100.");
      }
      const total = cantidadSinIVA * (1 + porcentajeIVA / 100);
      return total;
}
    
  const cantidadSinIVA = 100; 
  const porcentajeIVA = 19.5; 
  const totalConIVA = calcularTotalConIVA(cantidadSinIVA, porcentajeIVA);
  
  console.log(`El total de la factura con ${porcentajeIVA}% de IVA es: ${totalConIVA}`);
  