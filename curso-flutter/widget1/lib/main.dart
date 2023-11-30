
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Ejemplo Flutter',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Ejemplo Flutter'),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            // A simple action when the button is pressed, like showing a snackbar or a dialog
            showDialog(
              context: context,
              builder: (BuildContext context) {
                return AlertDialog(
                  content: Text('¡Hola, Mundo!'),
                );
              },
            );
          },
          child: Text('Presiona para Saludar'),
        ),
      ),
    );
  }
}
