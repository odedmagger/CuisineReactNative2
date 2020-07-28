/*
Item example: 
  {
    id: '2',
    name: 'Reggazzi',
    cuisine: 'Italian',
    rating: 5,
    deliveryTime: 40
  },
*/
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function RestaurantsItemView(props) { 
  const item = props.item;

  return (
    <View>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.rating}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
  item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
});