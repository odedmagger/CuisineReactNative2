import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import RestaurantsList from './RestaurantsList';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.section, { height: 80, backgroundColor: 'red' }]}>
        <ImageBackground 
          source={require('./img/food_hero.jpg')} 
          style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}
        >
          <Text style={styles.header_text}>EMPATHY EAT</Text>
        </ImageBackground>
      </View>
      <View style={[styles.section, { height: 80, backgroundColor: 'grey' }]}>
        <Text>Filters placeholder 222 333ff555r</Text>
      </View>
      <View style={styles.multiitemSection}>
        <RestaurantsList/>
        <View>
          <Text>Main</Text>
        </View>
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
