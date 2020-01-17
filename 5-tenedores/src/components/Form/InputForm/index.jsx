import React, { useState } from 'react'
import { Input, Icon } from 'react-native-elements'

import styles from './styles'

const InputForm = ({ placeholder, value, onChange, disabled, isPassword, iconName }) => {
  const [hidePassword, setHidePassword] = useState(true)

  const handlePress = () => {
    if (isPassword) return setHidePassword(!hidePassword)
    return null
  }

  return (
    <Input
      containerStyle={styles.inputForm}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
      password={isPassword}
      secureTextEntry={isPassword && hidePassword}
      rightIcon={
        <Icon
          name={!isPassword ? iconName : (hidePassword ? iconName[0] : iconName[1])}
          iconStyle={styles.iconRight}
          onPress={handlePress}
        />
      }
    />
  )
}

export default InputForm
