import { StyleSheet } from 'react-native'

import globalStyles from '../../../assets/styles/globalStyles'

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  },
  image: {
    height: 300,
    width: '100%',
    marginBottom: 40,
    marginTop: 8
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 10,
    textAlign: 'center'
  },
  description: {
    textAlign: 'center',
    marginBottom: 20
  },
  viewBtn: {
    flex: 1,
    alignItems: 'center'
  },
  btnStyle: {
    ...globalStyles.button
  },
  btnContainer: {
    width: '70%'
  }
})

export default styles
