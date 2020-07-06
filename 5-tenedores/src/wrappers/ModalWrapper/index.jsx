import React from 'react'
import { Overlay } from 'react-native-elements'

import styles from './styles'

export default function ModalWrapper ({ children, isVisible, setIsVisible }) {
  function handleBackdropPress () {
    setIsVisible(false)
  }

  return (
    <Overlay
      isVisible={isVisible}
      windowBackgroundColor='rgba(0, 0, 0, .5)'
      overlayStyle={styles.overlay}
      onBackdropPress={handleBackdropPress}
    >
      {children}
    </Overlay>
  )
}
