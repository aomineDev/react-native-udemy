import React, { useRef, useState } from 'react'
import { View } from 'react-native'

import LoadingPage from 'components/Shared/LoadingPage'
import Form from 'components/Restaurant/AddRestaurant/Form'
import Toast from 'components/Shared/Toast'

export default function AddRestaurant ({ navigation }) {
  const toastRef = useRef()
  const [isLoading, setIsLoading] = useState(false)

  if (isLoading) return <LoadingPage text='cargando...' />

  return (
    <View>
      <Form
        redirect={navigation}
        toastRef={toastRef}
        setIsloading={setIsLoading}
      />
      <Toast
        toastRef={toastRef}
        position='center'
      />
    </View>
  )
}
