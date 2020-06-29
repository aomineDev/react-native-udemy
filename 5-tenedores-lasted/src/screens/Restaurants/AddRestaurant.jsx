import React, { useRef } from 'react'
import { View } from 'react-native'

import Form from 'components/Restaurant/AddRestaurant/Form'
import Toast from 'components/Shared/Toast'

export default function AddRestaurant ({ navigation }) {
  const toastRef = useRef()

  function navigateTo () {
    navigation.navigate('Restaurants')
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
