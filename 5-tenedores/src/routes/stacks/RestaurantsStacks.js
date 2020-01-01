import { createStackNavigator } from 'react-navigation-stack'

import RestaurantsScreen from '../../screens/Restaurants'

const RestaurantsScreenStacks = createStackNavigator({
  Restaurants: {
    screen: RestaurantsScreen,
    navigationOptions: () => ({
      title: 'Buscsa tu restaurante'
    })
  }
})

export default RestaurantsScreenStacks
