import React from 'react'
import { ScrollView, Text, Image } from 'react-native'
import { withNavigation } from 'react-navigation'

import RedirectionButton from 'components/Account/UserGuest/RedirectionButton'

import styles from './styes'

function UserGuest ({ navigation }) {
  return (
    <ScrollView
      style={styles.viewBody}
      centerContent
    >
      <Image
        source={require('assets/img/account/user-guest.png')}
        style={styles.image}
        resizeMode='contain'
      />
      <Text style={styles.title}>Consulta tu perfil de 5 tenedores</Text>
      <Text style={styles.description}>¿Cómo describirías tu mejor restaurante? Busca y visualiza los mejores restaurantes de una forma sencilla, vota cual te ha gustado más y comenta como ha sido tu experiencia.</Text>
      <RedirectionButton
        title='Ver tu perfil'
        onPress={() => navigation.navigate('Login')}
      />
    </ScrollView>
  )
}

export default withNavigation(UserGuest)
