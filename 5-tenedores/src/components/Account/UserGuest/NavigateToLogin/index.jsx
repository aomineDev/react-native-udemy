import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'

import styles from './styles'

export default function NavigateToLogin ({ onPress }) {
  return (
    <View style={styles.viewBtn}>
      <Button
        title='Ver tu perfil'
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={onPress}
      />
    </View>
  )
}
