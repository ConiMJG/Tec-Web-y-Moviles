import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Sedes Universidad de Los Lagos',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Sedes Universidad de Los Lagos'),
        ),
        body: CampusList(),
      ),
    );
  }
}

class CampusList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView(
      children: <Widget>[
        CampusCard(title: 'Ulago Sede Osorno', imageUrl: 'assets/universidad-de-los-lagos-osorno.jpg'),
        CampusCard(title: 'Ulago Sede Puerto Montt', imageUrl: 'assets/Ula-P.montt.jpg'),
        CampusCard(title: 'Ulago Sede Chiloe', imageUrl: 'assets/chiloe-Ula.jpg'),
        // Añadir más widgets CampusCard aquí...
      ],
    );
  }
}

class CampusCard extends StatelessWidget {
  final String title;
  final String imageUrl;

  CampusCard({required this.title, required this.imageUrl});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Column(
        children: <Widget>[
          Image.asset(imageUrl), // Asegúrate de que las imágenes estén en la carpeta de assets
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(title, style: TextStyle(fontSize: 20)),
          ),
          ElevatedButton(
            child: Text('Más información'),
            onPressed: () {
              // Acción al presionar el botón
            },
          ),
        ],
      ),
    );
  }
}
