import React from 'react'
import { Image } from 'react-native'

import styles from './styles'

const Logo = () => (
  <Image
    source={require('../../../../assets/img/5-tenedores-logo.png')}
    style={styles.logo}
    resizeMode='contain'
  />
)

export default Logo
