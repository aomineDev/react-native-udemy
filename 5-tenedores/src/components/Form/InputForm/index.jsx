import React, { useState } from 'react'
import { Input, Icon } from 'react-native-elements'

import styles from './styles'

export default function InputForm ({ isPassword, iconName, ...props }) {
  const [isHidePassword, setIsHidePassword] = useState(true)

  function handleIconPress () {
    if (isPassword) return setIsHidePassword(!isHidePassword)
    return null
  }

  return (
    <Input
      {...props}
      containerStyle={styles.inputForm}
      secureTextEntry={isPassword && isHidePassword}
      rightIcon={
        <Icon
          name={!isPassword ? iconName : (isHidePassword ? iconName[0] : iconName[1])}
          color='#c1c1c1'
          underlayColor='transparent'
          onPress={handleIconPress}
        />
      }
    />
  )
}
