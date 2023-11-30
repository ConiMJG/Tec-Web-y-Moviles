import 'package:flutter/material.dart';

/// Flutter code sample for [ElevatedButton].

void main() => runApp(const ElevatedButtonExampleApp());

class ElevatedButtonExampleApp extends StatelessWidget {
  const ElevatedButtonExampleApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Ejemplo Flutter',
      home: Scaffold(
        appBar: AppBar(title: const Text('Ejemplo Flutter')),
        body: const Center(
          child: MyButton(),
        ),
      ),
    );
  }
}

class ElevatedButtonExample extends StatefulWidget {
  const ElevatedButtonExample({super.key});

  @override
  State<ElevatedButtonExample> createState() => _ElevatedButtonExampleState();
}

class _ElevatedButtonExampleState extends State<ElevatedButtonExample> {
  const MyButton({super.key});
  @override
  Widget build(BuildContext context) {
    final ButtonStyle style =
        ElevatedButton.styleFrom(textStyle: const TextStyle(fontSize: 20));
        
    return Center(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>
    return ElevatedButton(
      style: style,4
      onPressed: () {
        print('Hola Mundo');
      },
      child: const Text('Presiona para Saludar'),
    );
      ),
    ); 
  }
}



