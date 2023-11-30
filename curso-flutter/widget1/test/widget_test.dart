// This is a basic Flutter widget test.
//
// To perform an interaction with a widget in your test, use the WidgetTester
// utility in the flutter_test package. For example, you can send tap and scroll
// gestures. You can also use WidgetTester to find child widgets in the widget
// tree, read text, and verify that the values of widget properties are correct.

import 'package:flutter/material.dart';

import 'package:widget1/main.dart';



void main() {
  runApp(ElevatedButtonExampleApp());
}

class ElevatedButtonExampleApp extends StatefulWidget {
  const ElevatedButtonExampleApp({Key? key}) : super(key: key);

  @override
  _ElevatedButtonExampleAppState createState() => _ElevatedButtonExampleAppState();
}

class _ElevatedButtonExampleAppState extends State<ElevatedButtonExampleApp> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Counter Test'),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text(
                '$_counter', // El widget Text muestra el valor actual del contador.
              ),
              ElevatedButton(
                onPressed: _incrementCounter,
                child: Icon(Icons.add), // El botón tiene un ícono de suma.
              ),
            ],
          ),
        ),
      ),
    );
  }
}
