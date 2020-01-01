import { createStackNavigator } from 'react-navigation-stack'

import TopRestaurantsScreen from '../../screens/TopRestaurants'

const TopRestaurantsScreenStack = createStackNavigator({
  TopRestaurants: {
    screen: TopRestaurantsScreen,
    navigationOptions: () => ({
      title: 'Los mejores restaurantes'
    })
  }
})

export default TopRestaurantsScreenStack
