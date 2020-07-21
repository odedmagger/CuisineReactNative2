import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function RestaurantsList() {
    return (
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
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