import React from 'react'
import { Image, Text } from 'react-native'

import styles from './styles'

export default function Content () {
  return (
    <>
      <Image
        source={require('assets/img/account/user-guest.png')}
        style={styles.image}
        resizeMode='contain'
      />
      <Text style={styles.title}>Consulta tu perfil de 5 tenedores</Text>
      <Text style={styles.description}>¿Cómo describirías tu mejor restaurante? Busca y visualiza los mejores restaurantes de una forma sencilla, vota cual te ha gustado más y comenta como ha sido tu experiencia.</Text>
    </>
  )
}
