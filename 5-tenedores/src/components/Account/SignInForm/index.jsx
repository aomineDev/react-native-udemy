import React from './node_modules/react'
import { ScrollView, View, Text, Image } from 'react-native'
import { Divider } from './node_modules/react-native-elements'

import CreateAccount from '../CreateAccount'

import styles from './styles'

const SignInForm = () => {
  return (
    <ScrollView>
      <Image
        source={require('../../../../assets/img/5-tenedores-logo.png')}
        style={styles.logo}
        resizeMode='contain'
      />
      <View style={styles.viewContainer}>
        <Text>Form Login...</Text>
        <CreateAccount />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.viewContainer}>
        <Text>Login Facebook...</Text>
      </View>
    </ScrollView>
  )
}

export default SignInForm
