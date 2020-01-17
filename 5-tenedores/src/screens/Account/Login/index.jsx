import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'
import { withNavigation } from 'react-navigation'

import CreateAccount from '../../../components/Account/CreateAccount'
import LogoWrapper from '../../../layouts/Account/LogoWrapper'

import globalStyles from '../../../assets/styles/globalStyles'
import styles from './styles'

const Login = ({ navigation }) => {
  return (
    <LogoWrapper>
      <View style={globalStyles.container}>
        <Text>Form Login...</Text>
        <CreateAccount
          onPress={() => navigation.navigate('Register')}
        />
      </View>
      <Divider style={styles.divider} />
      <View style={globalStyles.container}>
        <Text>Login Facebook...</Text>
      </View>
    </LogoWrapper>
  )
}

export default withNavigation(Login)
