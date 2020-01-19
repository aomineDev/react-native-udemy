import { StyleSheet } from 'react-native'

import globalStyles from '../../../assets/styles/globalStyles'

const styles = StyleSheet.create({
  btnContainerRegister: {
    width: '95%',
    marginTop: 20
  },
  btnRegister: {
    ...globalStyles.button
  },
  btnRegisterDisabled: {
    backgroundColor: '#00a680'
  }
})

export default styles
