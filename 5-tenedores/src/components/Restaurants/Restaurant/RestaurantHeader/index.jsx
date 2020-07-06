import React from 'react'
import { View, Text } from 'react-native'
import { Rating } from 'react-native-elements'

import styles from './styles'

export default function RestaurantHeader ({ name, description, rating }) {
  return (
    <View style={styles.viewRestaurantHeader}>
      <View>
        <Text style={styles.restaurantName}>{name}</Text>
        <Rating
          style={styles.restaurantRating}
          imageSize={20}
          readonly
          startingValue={parseFloat(rating)}
        />
      </View>
      <Text style={styles.restaurantDescription}>{description}</Text>
    </View>
  )
}
