import React from 'react';
import { View, Text } from 'react-native';

export default function RestaurantDetailsScreen({route, navigation}) {
    const { restaurant } = route.params;
    return (
        <View>
            <Text>{restaurant.name}</Text>
            <Text>{'⭐'.repeat(restaurant.rating)}</Text>
            <Text>{`Delivery time: ${restaurant.deliveryTime} minutes.`}</Text>
        </View>
    );
}
