import React, { useRef, useState } from 'react'
import { View } from 'react-native'

import Loading from 'components/Shared/Loading'
import Form from 'components/Restaurant/AddRestaurant/Form'
import Toast from 'components/Shared/Toast'

export default function AddRestaurant ({ navigateTo }) {
  const toastRef = useRef()
  const [isLoading, setIsLoading] = useState(false)

  return (
    <View>
      <Form
        navigateTo={navigateTo}
        toastRef={toastRef}
        setIsLoading={setIsLoading}
      />
      <Toast
        toastRef={toastRef}
        position='center'
      />
      <Loading isVisible={isLoading} />
    </View>
  )
}
