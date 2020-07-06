import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  containerCard: {
    marginBottom: 30,
    borderWidth: 0
  },
  containerIcon: {
    position: 'absolute',
    top: -30,
    left: -30,
    zIndex: 1
  },
  restaurantImage: {
    height: 200
  },
  ratingTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  restaurantTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  restaurantDescription: {
    color: 'grey',
    marginTop: 0,
    textAlign: 'justify'
  }
})

export default styles
