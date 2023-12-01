import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Pokedex',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Pokedex'),
        ),
        body: CarouselWithPokemonCards(),
      ),
    );
  }
}

class CarouselWithPokemonCards extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Lista de Pokémons para el carrusel
    List<Map<String, dynamic>> pokemons = [
      {
        'name': 'Bulbasaur',
        'type': 'Planta',
        'number': 1,
        'color': Colors.green,
        'image': 'assets/bulbasaur.jpg',
      },
      {
        'name': 'Eevee',
        'type': 'Normal',
        'number': 133,
        'color': const Color.fromARGB(255, 175, 155, 76),
        'image': 'assets/eevee.jpg',
      },
      {
        'name': 'Jigglypuff',
        'type': 'Normal',
        'number': 39,
        'color': const Color.fromARGB(255, 175, 155, 76),
        'image': 'assets/jigglypuff.jpg',  
      },
      {
        'name': 'Pikachu',
        'type': 'Eléctrico',
        'number': 25,
        'color': const Color.fromARGB(255, 245, 227, 64),
        'image': 'assets/pikachu.jpg',
      },
      {
        'name': 'Squirtle',
        'type': 'Agua',
        'number': 7,
        'color': Color.fromARGB(255, 12, 200, 200),
        'image': 'assets/Squirtle.jpg',
      }
      // Añade más Pokémons aquí siguiendo el mismo formato
    ];

    // Crear una lista de tarjetas para el carrusel
    List<Widget> pokemonCards = pokemons.map((pokemon) {
      return PokemonCard(
        name: pokemon['name'],
        type: pokemon['type'],
        number: pokemon['number'],
        color: pokemon['color'],
        image: pokemon['image'],
      );
    }).toList();

    // El carrusel de tarjetas
    return CarouselSlider(
      options: CarouselOptions(
        height: 400,
        enlargeCenterPage: true, // Para un efecto de enfoque en el elemento central
        autoPlay: true, // Si quieres que el carrusel se reproduzca automáticamente
      ),
      items: pokemonCards,
    );
  }
}

class PokemonCard extends StatelessWidget {
  final String name;
  final String type;
  final int number;
  final Color color;
  final String image;

  const PokemonCard({
    Key? key,
    required this.name,
    required this.type,
    required this.number,
    required this.color,
    required this.image,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          Image.asset(
            image,
            width: 200,
            height: 200,
          ),
          ListTile(
            title: Text(
              name,
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            subtitle: Text(type),
            trailing: Text('Pokedex: $number'),
          ),
          Padding(
            padding: EdgeInsets.all(8.0),
            child: Container(
              color: color,
              child: Padding(
                padding: EdgeInsets.all(4.0),
                child: Text(type, style: TextStyle(color: Colors.white)),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
