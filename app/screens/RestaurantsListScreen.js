import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import RestaurantsList from '../components/RestaurantsList';

const restaurantData = [
    {
      id: '1',
      name: 'Triola',
      cuisine: 'Italian',
      rating: 4,
      deliveryTime: 60
    },
    {
      id: '2',
      name: 'Reggazzi',
      cuisine: 'Italian',
      rating: 5,
      deliveryTime: 40
    },
    {
      id: '3',
      name: 'Agadir',
      cuisine: 'Hamburger',
      rating: 3,
      deliveryTime: 90
    },
    {
      id: '4',
      name: 'Kisu',
      cuisine: 'Sushi',
      rating: 5,
      deliveryTime: 90
    },
    {
      id: '5',
      name: 'Moses',
      cuisine: 'Hamburger',
      rating: 3,
      deliveryTime: 110
    },
  ];

export default function RestaurantsListScreen(props) {
  return (
      <View style={styles.container}>
        <View style={[styles.section, { height: 80, backgroundColor: 'red' }]}>
          <ImageBackground 
            source={require('../../img/food_hero.jpg')} 
            style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}
          >
            <Text style={styles.header_text}>EMPATHY EAT</Text>
          </ImageBackground>
        </View>
        <View style={[styles.section, { height: 80, backgroundColor: 'grey' }]}>
          <Text>Filters placeholder 222 333ff555r</Text>
        </View>
        <View style={styles.multiitemSection}>
          <RestaurantsList data={restaurantData} navigation={props.navigation}/>
        </View>
        { /*<StatusBar style="auto" />*/ }
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  section: {
    alignItems: 'center'
  },
  multiitemSection: {
    flex: 1,
    flexDirection: 'row',
  },
  header_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40
  },
});
  