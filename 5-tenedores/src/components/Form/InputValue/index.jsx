import React from 'react'
import { Input, Icon } from 'react-native-elements'

import styles from './styles'
const InputValue = ({ placeholder, password, iconName }) => (
  <Input
    placeholder={placeholder}
    password={password}
    secureTextEntry={password}
    containerStyle={styles.inputForm}
    onChange={e => console.log(e.target.value)}
    rightIcon={
      <Icon
        name={iconName}
        iconStyle={styles.iconRight}
      />
    }
  />
)

export default InputValue
