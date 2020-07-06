import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  viewRestaurant: {
    flexDirection: 'row',
    margin: 10
  },
  viewRestaurantImg: {
    marginRight: 15
  },
  restaurantImage: {
    width: 80,
    height: 80
  },
  restaurantName: {
    fontWeight: 'bold'
  },
  restaurantAddress: {
    paddingTop: 2,
    color: 'grey'
  },
  restaurantDescription: {
    paddingTop: 2,
    color: 'grey',
    width: 300
  }
})

export default styles
