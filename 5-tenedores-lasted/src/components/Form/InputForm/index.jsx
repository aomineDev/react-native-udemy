import React, { useState } from 'react'
import { Input, Icon } from 'react-native-elements'

import styles from './styles'

export default function InputForm ({
  isPassword,
  isForEditForm,
  isMap,
  isTextArea,
  iconName,
  handleIconPress,
  locationRestaurant,
  ...props
}) {
  const [isHidePassword, setIsHidePassword] = useState(true)

  function handlePress () {
    if (isPassword) return setIsHidePassword(!isHidePassword)
    if (handleIconPress) return handleIconPress()
    return null
  }

  if (isPassword) {
    return (
      <Input
        {...props}
        containerStyle={isForEditForm ? styles.inputEditForm : styles.inputForm}
        secureTextEntry={isHidePassword}
        rightIcon={
          <Icon
            name={isHidePassword ? iconName[0] : iconName[1]}
            color='#c1c1c1'
            underlayColor='transparent'
            onPress={handlePress}
          />
        }
      />
    )
  }

  if (isMap) {
    return (
      <Input
        {...props}
        containerStyle={styles.inputForm}
        rightIcon={
          <Icon
            name={iconName}
            color={locationRestaurant ? '#00a680' : '#c1c1c1'}
            underlayColor='transparent'
            onPress={handlePress}
          />
        }
      />
    )
  }

  if (isTextArea) {
    return (
      <Input
        {...props}
        containerStyle={isForEditForm ? styles.inputEditForm : styles.inputForm}
        inputContainerStyle={styles.textArea}
        rightIcon={
          <Icon
            name={iconName}
            color='#c1c1c1'
            underlayColor='transparent'
            onPress={handlePress}
          />
        }
      />
    )
  }

  return (
    <Input
      {...props}
      containerStyle={isForEditForm ? styles.inputEditForm : styles.inputForm}
      rightIcon={
        <Icon
          name={iconName}
          color='#c1c1c1'
          underlayColor='transparent'
          onPress={handlePress}
        />
      }
    />
  )
}
