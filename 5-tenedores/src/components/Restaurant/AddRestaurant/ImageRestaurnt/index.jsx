import React from 'react'
import { View } from 'react-native'
import { Image } from 'react-native-elements'

import styles from './styles'

export default function ImageRestaurant ({ imageRestaurant }) {
  return (
    <View
      style={styles.viewPhoto}
    >
      {imageRestaurant ? (
        <Image
          source={{ uri: imageRestaurant }}
          style={styles.image}
        />
      ) : (
        <Image
          source={require('assets/img/restaurant/add-restaurant/no-image.png')}
          style={styles.image}
        />
      )}
    </View>
  )
}
