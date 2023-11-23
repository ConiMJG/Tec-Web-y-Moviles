import 'dart:io';

void main() {
  print('Por favor, ingresa un número:');
  var entrada = stdin.readLineSync();
  if (entrada != null && entrada.isNotEmpty) {
    var numero = int.tryParse(entrada);
    if (numero != null) {
      // Verificar si el número es primo
      var esPrimo = verificarPrimo(numero);
      print(esPrimo ? 'El número es primo.' : 'El número no es primo.');

      // Verificar si el número es par o impar
      var esPar = verificarPar(numero);
      print(esPar ? 'El número es par.' : 'El número es impar.');
    } else {
      print('La entrada no es un número entero válido.');
    }
  } else {
    print('No se proporcionó ninguna entrada.');
  }
}

bool verificarPrimo(int numero) {
  if (numero <= 1) return false;
  for (int i = 2; i <= numero / i; ++i) {
    if (numero % i == 0) return false;
  }
  return true;
}

bool verificarPar(int numero) {
  return numero % 2 == 0;
}
