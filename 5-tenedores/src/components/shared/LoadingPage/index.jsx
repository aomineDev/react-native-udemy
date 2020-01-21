import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { Overlay } from 'react-native-elements'

import styles from './styles'

const LoadingPage = ({ text }) => {
  return (
    <Overlay
      isVisible
      windowBackgroundColor='transparent'
      overlayStyle={styles.overlay}
    >
      <View style={styles.view}>
        <ActivityIndicator size='large' color='#08a680' />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  )
}

export default LoadingPage
