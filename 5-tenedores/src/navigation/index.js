import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

import RestaurantsStack from './stacks/RestaurantsStack'
import FavoritesStack from './stacks/FavoritesStack'
import TopRestaurantsStack from './stacks/TopRestaurantsStack'
import SearchStack from './stacks/SearchStack'
import AccountStack from './stacks/AccountStack'

const Tab = createBottomTabNavigator()

export default function Navigation () {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='restaurants'
        tabBarOptions={{
          inactiveTintColor: '#646464',
          activeTintColor: '#00a680'
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color)
        })}
      >
        <Tab.Screen
          name='restaurants'
          component={RestaurantsStack}
          options={{ title: 'Restaurantes' }}
        />
        <Tab.Screen
          name='favorites'
          component={FavoritesStack}
          options={{ title: 'Favs' }}
        />
        <Tab.Screen
          name='topRestaurants'
          component={TopRestaurantsStack}
          options={{ title: 'Top 5' }}
        />
        <Tab.Screen
          name='search'
          component={SearchStack}
          options={{ title: 'Buscar' }}
        />
        <Tab.Screen
          name='account'
          component={AccountStack}
          options={{ title: 'Cuenta' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

function screenOptions (route, color) {
  let iconName

  switch (route.name) {
    case 'restaurants':
      iconName = 'restaurant'
      break
    case 'favorites':
      iconName = 'favorite'
      break
    case 'topRestaurants':
      iconName = 'star'
      break
    case 'search':
      iconName = 'search'
      break
    case 'account':
      iconName = 'person'
      break
  }

  return (
    <Icon name={iconName} size={22} color={color} />
  )
}
