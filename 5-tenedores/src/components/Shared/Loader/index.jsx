import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Overlay } from 'react-native-elements'

import styles from './styles'

export default function Loader ({ isVisible }) {
  return (
    <Overlay
      isVisible={isVisible}
      windowBackgroundColor='transparent'
      overlayStyle={styles.overlay}
    >
      <View style={styles.view}>
        <ActivityIndicator size='large' color='#00a680' />
      </View>
    </Overlay>
  )
}
