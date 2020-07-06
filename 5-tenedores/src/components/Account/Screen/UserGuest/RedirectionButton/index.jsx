import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'

import styles from './styles'

export default function RedirectionButton (props) {
  return (
    <View style={styles.viewBtn}>
      <Button
        {...props}
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
      />
    </View>
  )
}
