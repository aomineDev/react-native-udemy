import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { withNavigation } from 'react-navigation'

import styles from './styes'

const UserGuest = ({ navigation }) => (
  <ScrollView
    style={styles.viewBody}
    centerContent
  >
    <Image
      source={require('../../../assets/img/account/user-guest.jpg')}
      style={styles.image}
      resizeMode='contain'
    />
    <Text style={styles.title}>Consulta tu perfil de 5 tenedores</Text>
    <Text style={styles.description}>¿Cómo describirías tu mejor restaurante? Busca y visualiza los mejores restaurantes de una forma sencilla, vota cual te ha gustado más y comenta como ha sido tu experiencia.</Text>
    <View style={styles.viewBtn}>
      <Button
        title='Ver tu perfil'
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  </ScrollView>
)

export default withNavigation(UserGuest)
