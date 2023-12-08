import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';

void main() {
  runApp(const MiApp());
}

class MiApp extends StatefulWidget {
  const MiApp({super.key});

  @override
  MiAppState createState() => MiAppState();
}

class MiAppState extends State<MiApp> {
  int _currentIndex = 0;
  final List<String> imgList = [
    'assets/escandalosos.jpg',
    'assets/panda.png',
    'assets/Pardo.jpg',
    'assets/polar.jpg',
    // Agrega aquí las rutas de tus imágenes locales
  ];

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Mi App con Tabs'),
        ),
        body: _currentIndex == 0 
            ? Center(
                child: CarouselSlider(
                  options: CarouselOptions(
                    autoPlay: true,
                    enlargeCenterPage: true,
                    height: MediaQuery.of(context).size.height * 0.4,
                    viewportFraction: 0.9,
                  ),
                  items: imgList.map((item) => Image.asset(item, fit: BoxFit.contain)).toList(),
                ),
              )
            : Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    const CircleAvatar(
                      radius: 90,
                      backgroundImage: AssetImage('assets/usuario.jpg'),
                    ),
                    const SizedBox(height: 20),
                    ElevatedButton(
                      onPressed: () {
                        // Implementa aquí la acción al presionar el botón
                      },
                      child: const Text('Editar Perfil'),
                    ),
                  ],
                ),
              ),
        bottomNavigationBar: BottomNavigationBar(
          currentIndex: _currentIndex,
          items: const [
            BottomNavigationBarItem(
              icon: Icon(Icons.image),
              label: 'Carrusel',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.person),
              label: 'Imagen y Botón',
            ),
          ],
          onTap: (index) {
            setState(() {
              _currentIndex = index;
            });
          },
        ),
      ),
    );
  }
}
