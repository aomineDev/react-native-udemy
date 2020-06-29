import React from 'react'
import { Icon } from 'react-native-elements'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import RestaurantsScreenStacks from './stacks/RestaurantsStacks'
import FavoritesScreenStacks from './stacks/FavoritesStacks'
import TopRestaurantsScreenStacks from './stacks/TopRestaurantsStacks'
import SearchScreenStacks from './stacks/SearchStacks'
import AccountScreenStacks from './stacks/AccountStacks'

const NavigationStacks = createBottomTabNavigator(
  {
    Restaurants: {
      screen: RestaurantsScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: 'Restaurantes',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name='restaurant'
            size={22}
            color={tintColor}
          />
        )
      })
    },
    Favorites: {
      screen: FavoritesScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: 'Favs',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name='favorite'
            size={22}
            color={tintColor}
          />
        )
      })
    },
    TopRestaurants: {
      screen: TopRestaurantsScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: 'Top 5',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name='star'
            size={22}
            color={tintColor}
          />
        )
      })
    },
    Search: {
      screen: SearchScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: 'Buscar',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name='search'
            size={22}
            color={tintColor}
          />
        )
      })
    },
    Account: {
      screen: AccountScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: 'Cuenta',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name='person'
            size={22}
            color={tintColor}
          />
        )
      })
    }
  },
  {
    initialRouteName: 'Restaurants',
    order: [
      'Restaurants',
      'Favorites',
      'TopRestaurants',
      'Search',
      'Account'
    ],
    tabBarOptions: {
      inactiveTintColor: '#646464',
      activeTintColor: '#00a680'
    }
  }
)

export default createAppContainer(NavigationStacks)
