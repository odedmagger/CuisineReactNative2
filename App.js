import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantsListScreen from './app/screens/RestaurantsListScreen';
import RestaurantDetailsScreen from './app/screens/RestaurantDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={RestaurantsListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Restaurant" 
          component={RestaurantDetailsScreen}
          options={({ route }) => ({ title: route.params.restaurant.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}