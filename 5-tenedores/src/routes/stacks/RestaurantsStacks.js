import { createStackNavigator } from 'react-navigation-stack'

import RestaurantsScreen from 'screens/Restaurants'
import AddRestaurantScreen from 'screens/AddRestaurant'

const RestaurantsScreenStacks = createStackNavigator(
  {
    Restaurants: {
      screen: RestaurantsScreen,
      navigationOptions: () => ({
        title: 'Buscsa tu restaurante'
      })
    },
    AddRestaurant: {
      screen: AddRestaurantScreen,
      navigationOptions: () => ({
        title: 'Añade un Restaurante'
      })
    }
  },
  {
    initialRouteName: 'AddRestaurant'
  }
)

export default RestaurantsScreenStacks
