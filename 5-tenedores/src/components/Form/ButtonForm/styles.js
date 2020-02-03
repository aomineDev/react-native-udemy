import { StyleSheet } from 'react-native'

import globalStyles from '../../../assets/styles/globalStyles'

const styles = StyleSheet.create({
  btnFormContainer: {
    width: '95%',
    marginTop: 20
  },
  btnEditFormContainer: {
    width: '60%',
    marginTop: 20
  },
  btnForm: {
    ...globalStyles.button,
    paddingRight: 24,
    paddingLeft: 24
  },
  btnFormDisabled: {
    backgroundColor: '#00a680'
  }
})

export default styles
