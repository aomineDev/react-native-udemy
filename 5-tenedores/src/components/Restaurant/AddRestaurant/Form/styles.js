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
  },
  viewImages: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30
  },
  containerIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    height: 70,
    width: 70,
    backgroundColor: '#e3e3e3'
  },
  miniature: {
    width: 70,
    height: 70,
    marginRight: 10
  },
  viewForm: {
    marginRight: 10,
    marginLeft: 10
  },
  btnContainer: {
    marginLeft: 20
  },
  btnAddRestaurant: {
    marginLeft: 10,
    marginRight: 10
  },
  mapStyle: {
    width: '100%',
    height: 550
  },
  viewMapBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },
  viewMapBtnSave: {
    backgroundColor: '#00a680'
  },
  viewMapBtnCancel: {
    backgroundColor: '#e53935'
  }
})

export default styles
