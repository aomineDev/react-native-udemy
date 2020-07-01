import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Restaurants from 'screens/Restaurants'
import AddRestaurant from 'screens/Restaurants/AddRestaurant'
import Restaurant from 'screens/Restaurants/Restaurant'
import AddReview from 'screens/Restaurants/AddReview'

const Stack = createStackNavigator()

export default function RestaurantsStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='restaurants'
        component={Restaurants}
        options={{ title: 'Restaurantes' }}
      />
      <Stack.Screen
        name='add-restaurant'
        component={AddRestaurant}
        options={{ title: 'Añade un restaurante' }}
      />
      <Stack.Screen
        name='restaurant'
        component={Restaurant}
      />
      <Stack.Screen
        name='add-review'
        component={AddReview}
        options={{ title: 'Añade una review' }}
      />
    </Stack.Navigator>
  )
}
