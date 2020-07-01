import React, { useRef } from 'react'
import { View } from 'react-native'

import Form from 'components/Restaurants/Screens/AddRestaurant/Form'
import Toast from 'components/Shared/Toast'

export default function AddRestaurant ({ navigation }) {
  const toastRef = useRef()

  function navigateTo () {
    navigation.navigate('restaurants')
  }

  return (
    <View>
      <Form
        navigateTo={navigateTo}
        toastRef={toastRef}
      />
      <Toast
        toastRef={toastRef}
        position='center'
      />
    </View>
  )
}
