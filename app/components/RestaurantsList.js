import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function RestaurantsList(props) { 
  return (
        <FlatList
          data={props.data}
          renderItem={({item}) => 
            <View>
              <Text style={styles.item}>{item.name}</Text>
              <Text style={styles.item}>{item.rating}</Text>
            </View>
            
          }
        />
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
});