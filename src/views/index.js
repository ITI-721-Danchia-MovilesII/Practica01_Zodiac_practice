import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { style_01 } from '../styles/style_01';

const zodiacData = [
    {
        name: 'Acuario',
        date: '20 Enero - 18 Febrero',
        element: 'Aire',
        star: 'Urano',
        gemstone: 'Amatista',
        image: require('../imgs/zodiac/01_Acuario.png'),
      },
      {
        name: 'Piscis',
        date: '19 Febrero - 20 Marzo',
        element: 'Agua',
        star: 'Neptuno',
        gemstone: 'Aguamarina',
        image: require('../imgs/zodiac/02_Pisis.png'),
      },
  {
    name: 'Aries',
    date: '21 Marzo - 19 Abril',
    element: 'Fuego',
    star: 'Marte',
    gemstone: 'Jaspe Rojo',
    image: require('../imgs/zodiac/03_Aries.png'),
  },
  {
    name: 'Tauro',
    date: '20 Abril - 20 Mayo',
    element: 'Tierra',
    star: 'Venus',
    gemstone: 'Esmeralda',
    image: require('../imgs/zodiac/04_Tauro.png'),
  },
  {
    name: 'Geminis',
    date: '21 Mayo - 20 Junio',
    element: 'Aire',
    star: 'Mercurio',
    gemstone: 'Ágata',
    image: require('../imgs/zodiac/05_Geminis.png'),
  },
  {
    name: 'Cancer',
    date: '21 Junio - 22 Julio',
    element: 'Agua',
    star: 'Luna',
    gemstone: 'Perla',
    image: require('../imgs/zodiac/06_Cancer.png'),
  },
  {
    name: 'Leo',
    date: '23 Julio - 22 Agosto',
    element: 'Fuego',
    star: 'Sol',
    gemstone: 'Rubí',
    image: require('../imgs/zodiac/07_Leo.png'),
  },
  {
    name: 'Virgo',
    date: '23 Agosto - 22 Septiembre',
    element: 'Tierra',
    star: 'Mercurio',
    gemstone: 'Zafiro Azul',
    image: require('../imgs/zodiac/08_Virgo.png'),
  },
  {
    name: 'Libra',
    date: '23 Septiembre - 22 Octubre',
    element: 'Aire',
    star: 'Venus',
    gemstone: 'Ópalo',
    image: require('../imgs/zodiac/09_Libra.png'),
  },
  {
    name: 'Escorpio',
    date: '23 Octubre - 21 Noviembre',
    element: 'Agua',
    star: 'Plutón',
    gemstone: 'Obsidiana',
    image: require('../imgs/zodiac/10_Escorpio.png'),
  },
  {
    name: 'Sagitario',
    date: '22 Noviembre - 21 Diciembre',
    element: 'Fuego',
    star: 'Júpiter',
    gemstone: 'Topacio',
    image: require('../imgs/zodiac/11_Sagitario.png'),
  },
  {
    name: 'Capricornio',
    date: '22 Diciembre - 19 Enero',
    element: 'Tierra',
    star: 'Saturno',
    gemstone: 'Granate',
    image: require('../imgs/zodiac/12_Capricornio.png'),
  },
];

const Index = () => {
  return (
    <View>
      <View style={style_01.divHeader}>
        <Image source={require('../imgs/logos/logo_universidad.png')} />
      </View>

      <View style={style_01.divMain}>
        <Text style={style_01.h1}>Signos Zodiacales</Text>
        <ScrollView style={{ marginTop: 8 }}>
          {zodiacData.map((item, index) => (
            <View style={style_01.tarjeta} key={index}>
              <Image source={item.image} style={style_01.zodiacImage} />
              <View>
                <Text>Nombre: {item.name}</Text>
                <Text>Fechas: {item.date}</Text>
                <Text>Elemento: {item.element}</Text>
                <Text>Astro: {item.star}</Text>
                <Text>Piedra: {item.gemstone}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={style_01.divFooter}>
        <Text style={style_01.textFooter}>Carrera de Tecnologías de Información</Text>
        <Text style={style_01.textFooter}>Sede del Pacífico</Text>
      </View>
    </View>
  );
};

export default Index;
