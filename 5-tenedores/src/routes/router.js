import React from 'react'
import { Icon } from 'react-native-elements'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import RestaurantsScreenStacks from './stacks/RestaurantsStacks'
import TopRestaurantsScreenStack from './stacks/TopRestaurantsStacks'
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
    TopRestaurants: {
      screen: TopRestaurantsScreenStack,
      navigationOptions: () => ({
        tabBarLabel: 'Ranking',
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
