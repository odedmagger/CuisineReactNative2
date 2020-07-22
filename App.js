import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import RestaurantsList from './RestaurantsList';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.section, { height: 80, backgroundColor: 'red' }]}>
        <Text>ReNa-Eat</Text>
      </View>
      <View style={[styles.section, { height: 80, backgroundColor: 'grey' }]}>
        <Text>Filters placeholder</Text>
      </View>
      <View style={styles.multiitemSection}>
        <RestaurantsList/>
        <View>
          <Text>Main</Text>
        </View>
      </View>
      {/*<StatusBar style="auto" />*/}
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
    padding: 10,
    alignItems: 'center'
  },
  multiitemSection: {
    flex: 1,
    flexDirection: 'row',
  },
});
