import { createStackNavigator } from 'react-navigation-stack'

import AccountScreen from 'screens/Account'
import LoginScreen from 'screens/Account/Login'
import RegisterScreen from 'screens/Account/Register'

const AccountScreenStacks = createStackNavigator(
  {
    Account: {
      screen: AccountScreen,
      navigationOptions: () => ({
        title: 'Mi cuenta'
      })
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: () => ({
        title: 'Regístrarse'
      })
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: () => ({
        title: 'Regístrate'
      })
    }
  },
  {
    initialRouteName: 'Account'
  }
)

export default AccountScreenStacks
