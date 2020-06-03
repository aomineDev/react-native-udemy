import { StyleSheet, Dimensions } from 'react-native'

const widthScreen = Dimensions.get('window').width

const styles = StyleSheet.create({
  viewPhoto: {
    alignItems: 'center',
    height: 200,
    marginBottom: 20
  },
  image: {
    width: widthScreen,
    height: 200
  }
})

export default styles
