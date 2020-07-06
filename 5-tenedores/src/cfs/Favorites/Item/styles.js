import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  viewRestaurant: {
    margin: 10,
    elevation: 1
  },
  restaurantImage: {
    height: 180
  },
  restaurantBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  restaurantName: {
    fontWeight: 'bold',
    fontSize: 24
  }
})

export default styles
