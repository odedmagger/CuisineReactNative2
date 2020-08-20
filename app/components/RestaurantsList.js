import React from 'react';
import { FlatList } from 'react-native';
import RestaurantsItemView from './RestaurantItemView';

export default function RestaurantsList(props) { 
  return (
        <FlatList
          data={props.data}
          renderItem={ ({item}) => <RestaurantsItemView item={item} navigation={props.navigation} /> }
        />
    );
}
