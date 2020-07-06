import React from 'react'
import { Image } from 'react-native-elements'

import CenterWrapper from 'wrappers/CenterWrapper'

import styles from './styles'

export default function NotFound () {
  return (
    <CenterWrapper>
      <Image
        source={require('assets/img/restaurant/no-result-found.png')}
        resizeMode='cover'
        style={styles.notFoundImage}
      />
    </CenterWrapper>
  )
}
