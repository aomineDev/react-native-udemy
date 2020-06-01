import React from 'react'
import { Icon } from 'react-native-elements'

import styles from './styles'

export default function AddRestaurantButton ({ navigation }) {
  return (
    <Icon
      reverse
      name='add'
      color='#00a680'
      onPress={() => navigation.navigate('AddRestaurant')}
      containerStyle={styles.btnContainer}
    />
  )
}
