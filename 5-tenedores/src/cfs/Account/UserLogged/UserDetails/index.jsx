import React, { useState } from 'react'
import { View } from 'react-native'
import { ListItem } from 'react-native-elements'

import ModalWrapper from 'wrappers/ModalWrapper'
import EditDisplayNameForm from '../EditDisplayNameForm'
import EditEmailForm from '../EditEmailForm'
import EditPasswordForm from '../EditPasswordForm'

import styles from './styles'

export default function UserDetails ({ displayName, email, setReload, toastRef }) {
  const [isVisible, setIsVisible] = useState(false)
  const [formComponent, setFormComponent] = useState(null)

  function selectComponent (key) {
    switch (key) {
      case 'displayName':
        setFormComponent(
          <EditDisplayNameForm
            value={displayName}
            setReload={setReload}
            setIsVisible={setIsVisible}
            toastRef={toastRef}
          />
        )
        break
      case 'email':
        setFormComponent(
          <EditEmailForm
            value={email}
            setReload={setReload}
            setIsVisible={setIsVisible}
            toastRef={toastRef}
          />
        )
        break
      case 'password':
        setFormComponent(
          <EditPasswordForm
            setIsVisible={setIsVisible}
            toastRef={toastRef}
          />
        )
        break
    }
    setIsVisible(true)
  }

  const details = [
    {
      title: 'Editar nombre de usuario',
      iconNameLeft: 'account-circle',
      iconColorLeft: '#ccc',
      iconNameRight: 'keyboard-arrow-right',
      iconColorRight: '#ccc',
      handlePress: () => selectComponent('displayName')
    },
    {
      title: 'Editar email',
      iconNameLeft: 'mail',
      iconColorLeft: '#ccc',
      iconNameRight: 'keyboard-arrow-right',
      iconColorRight: '#ccc',
      handlePress: () => selectComponent('email')
    },
    {
      title: 'Editar contraseña',
      iconNameLeft: 'lock',
      iconColorLeft: '#ccc',
      iconNameRight: 'keyboard-arrow-right',
      iconColorRight: '#ccc',
      handlePress: () => selectComponent('password')
    }
  ]

  return (
    <View>
      {details.map((detail, index) => (
        <ListItem
          key={index}
          title={detail.title}
          leftIcon={{
            name: detail.iconNameLeft,
            color: detail.iconColorLeft
          }}
          rightIcon={{
            name: detail.iconNameRight,
            color: detail.iconColorRight
          }}
          onPress={detail.handlePress}
          containerStyle={styles.container}
        />
      ))}

      {formComponent && (
        <ModalWrapper
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        >
          {formComponent}
        </ModalWrapper>
      )}
    </View>
  )
}
