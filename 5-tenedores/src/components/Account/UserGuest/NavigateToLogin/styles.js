import { StyleSheet } from 'react-native'

import globalStyles from '../../../../assets/styles/globalStyles'

const styles = StyleSheet.create({
  btnStyle: {
    ...globalStyles.button
  },
  btnContainer: {
    width: '70%'
  },
  viewBtn: {
    flex: 1,
    alignItems: 'center'
  }
})

export default styles
