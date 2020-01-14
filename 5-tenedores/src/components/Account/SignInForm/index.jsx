import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { Divider } from 'react-native-elements'

import Logo from '../Logo'
import CreateAccount from '../CreateAccount'

import globalStyles from '../../../styles/globalStyles'
import styles from './styles'

const SignInForm = ({ onPress }) => {
  return (
    <ScrollView>
      <Logo />
      <View style={globalStyles.container}>
        <Text>Form Login...</Text>
        <CreateAccount onPress={onPress} />
      </View>
      <Divider style={styles.divider} />
      <View style={globalStyles.container}>
        <Text>Login Facebook...</Text>
      </View>
    </ScrollView>
  )
}

export default SignInForm
