// This is a basic Flutter widget test.
//
// To perform an interaction with a widget in your test, use the WidgetTester
// utility in the flutter_test package. For example, you can send tap and scroll
// gestures. You can also use WidgetTester to find child widgets in the widget
// tree, read text, and verify that the values of widget properties are correct.

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:widget3/main.dart';

void main() {
  testWidgets('Pokemon Card test', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(MyApp());

    // Verify that the main PokemonCard widget is present in the widget tree.
    expect(find.byType(PokemonCard), findsOneWidget);

    // Verify that the Image widget for the Pokemon image is present.
    expect(find.byType(Image), findsOneWidget);

    // Verify that the texts for the Pokemon name, type, and Pokedex number are present.
    expect(find.text('Bulbasaur'), findsOneWidget);
    expect(find.text('Planta'), findsWidgets); // FindsWidgets because the type appears twice
    expect(find.text('Pokedex: 1'), findsOneWidget);
  });
}

