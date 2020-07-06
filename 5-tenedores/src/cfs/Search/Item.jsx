import React from 'react'
import { ListItem, Icon } from 'react-native-elements'

import { useNavigation } from '@react-navigation/native'

export default function Item ({ item }) {
  const navigation = useNavigation()
  const { id, images, name } = item
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
  return (
    <ListItem
      title={name}
      leftAvatar={{
        source: restaurantImage
          ? { uri: restaurantImage }
          : require('assets/img/restaurant/no-image.png')
      }}
      rightIcon={<Icon name='chevron-right' />}
      onPress={handlePress}
    />
  )
}
