import React from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Image } from 'react-native-elements'

import styles from './styles'

export default function Restaurant ({ restaurant, navigation }) {
  const {
    item: {
      id,
      images,
      name,
      address,
      description
    }
  } = restaurant
  const restaurantImage = images[0]
  const truncate = 60

  function navigateTo () {
    navigation.navigate('restaurant', {
      id,
      name
    })
  }

  return (
    <TouchableOpacity onPress={navigateTo}>
      <View style={styles.viewRestaurant}>
        <View style={styles.viewRestaurantImg}>
          <Image
            resizeMode='cover'
            source={
              restaurantImage
                ? { uri: restaurantImage }
                : require('assets/img/restaurant/no-image.png')
            }
            style={styles.restaurantImage}
            PlaceholderContent={<ActivityIndicator color='#fff' />}
          />
        </View>
        <View>
          <Text style={styles.restaurantName}>{name}</Text>
          <Text style={styles.restaurantAddress}>{address}</Text>
          <Text style={styles.restaurantDescription}>{
            description.length > truncate
              ? description.substr(0, truncate) + '...'
              : description
          }
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
