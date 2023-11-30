// This is a basic Flutter widget test.
//
// To perform an interaction with a widget in your test, use the WidgetTester
// utility in the flutter_test package. For example, you can send tap and scroll
// gestures. You can also use WidgetTester to find child widgets in the widget
// tree, read text, and verify that the values of widget properties are correct.

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:widget2/main.dart';

void main() {
  testWidgets('Sedes Universidad de Los Lagos UI Test', (WidgetTester tester) async {
    // Construye la aplicación y dispara un frame.
    await tester.pumpWidget(MyApp());

    // Verifica que el texto de las sedes esté presente.
    expect(find.text('Ulago Sede Osorno'), findsOneWidget);
    expect(find.text('Ulago Sede Puerto Montt'), findsOneWidget);
    expect(find.text('Ulago Sede Chiloe'), findsOneWidget);

    // Podrías añadir más comprobaciones aquí, como verificar que las imágenes se cargan
    // o que los botones de "Más información" están presentes, etc.
  });
}

