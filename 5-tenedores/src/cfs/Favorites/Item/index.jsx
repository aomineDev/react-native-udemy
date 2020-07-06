import React from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { remove } from 'utils/FireBase/firestore'

import FavIcon from '../FavIcon'

import styles from './styles'

export default function Item ({ item, toastRef, removeItem }) {
  const navigation = useNavigation()
  const { id, images, name, favoriteId } = item
  const restaurantImage = images[0]

  function handlePress () {
    navigation.navigate('restaurants', {
      screen: 'restaurant',
      params: {
        id,
        name
      }
    })
  }

  function removeFavorite () {
    remove('favorites', favoriteId)
      .then(() => {
        removeItem('id', id)
        toastRef.current.show('Removido de favoritos')
      })
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.viewRestaurant}>
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
        <View style={styles.restaurantBox}>
          <Text style={styles.restaurantName}>{name}</Text>
          <FavIcon
            remove={removeFavorite}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}
