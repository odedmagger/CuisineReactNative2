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
import { StyleSheet, Image, Text, View, TouchableHighlight } from 'react-native';

const iconsCache = {
  Italian: require('../../img/pizza.png'),
  Sushi: require('../../img/sushi.png'),
  Hamburger: require('../../img/burger.png')
}

export default function RestaurantsItemView(props) { 
  const handleClick = () => {
    props.navigation.navigate('Restaurant', {
      title: 'This does not work',
      restaurant: props.item
    }); // TODO-OM - how to set title dynamically?
  }

  const item = props.item;

  return (
    <TouchableHighlight onPress={ handleClick } underlayColor="#e6e6fa99">
      <View style={styles.itemContainer}>
        <Image
            style={styles.foodIcon}
            source={iconsCache[item.cuisine]}
          />
          <View style={styles.textsContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemRating}>{'⭐'.repeat(item.rating)}</Text>
          </View>
      </View>
    </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
  itemContainer: {
      /*backgroundColor: 'red',*/
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      marginHorizontal: 5,
  },
  foodIcon: {
    width: 48,
    height: 48,
  },
  textsContainer: {
    /*backgroundColor: 'green',*/
    marginLeft: 15,
  },
  itemName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  itemRating: {

  }
});