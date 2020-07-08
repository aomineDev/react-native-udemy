import React from 'react'
import { View } from 'react-native'

import InputForm from 'components/Form/InputForm'

import styles from './styles'

export default function AddRestaurantForm ({
  setRestaurantName,
  setRestaurantAddress,
  setRestaurantDescription,
  locationRestaurant,
  setIsVisibleMap,
  isDisabled
}) {
  return (
    <View style={styles.viewForm}>
      <InputForm
        placeholder='Nombre del restaurante'
        disabled={isDisabled}
        onChange={setRestaurantName}
      />
      <InputForm
        placeholder='Dirección'
        iconName='person-pin-circle'
        isMap
        locationRestaurant={locationRestaurant}
        disabled={isDisabled}
        onChange={setRestaurantAddress}
        handleIconPress={() => setIsVisibleMap(true)}
      />
      <InputForm
        placeholder='Descripción del restaurante'
        multiline
        isTextArea
        disabled={isDisabled}
        onChange={setRestaurantDescription}
      />
    </View>
  )
}
