import React from 'react'
import { Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from './styles'

export default function LogoWrapper ({ children }) {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require('assets/img/5-tenedores-logo.png')}
        style={styles.logo}
        resizeMode='contain'
      />
      {children}
    </KeyboardAwareScrollView>
  )
}
