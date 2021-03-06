import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Account from 'screens/Account'
import Login from 'screens/AccountScreens/Login'
import Register from 'screens/AccountScreens/Register'

const Stack = createStackNavigator()

export default function AccountStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='account'
        component={Account}
        options={{ title: 'Mi cuenta' }}
      />
      <Stack.Screen
        name='login'
        component={Login}
        options={{ title: 'Iniciar sesión' }}
      />
      <Stack.Screen
        name='register'
        component={Register}
        options={{ title: 'Registrate' }}
      />
    </Stack.Navigator>
  )
}
