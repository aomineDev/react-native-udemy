import React from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Card, Icon, Image, Rating } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function Item ({ item, index }) {
  const navigation = useNavigation()
  const { id, images, name, description, rating } = item
  const restaurantImage = images[0]
  const truncate = 60
  let iconColor = '#262626'

  switch (index) {
    case 0:
      iconColor = '#efb819'
      break
    case 1:
      iconColor = '#e3e4e5'
      break
    case 2:
      iconColor = '#cd7f32'
      break
    default:
      break
  }

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
    <TouchableOpacity onPress={handlePress}>
      <Card style={styles.containerCard}>
        <Icon
          name='restaurant-menu'
          color={iconColor}
          size={40}
          containerStyle={styles.containerIcon}
        />
        <Image
          style={styles.restaurantImage}
          resizeMode='cover'
          source={
            restaurantImage
              ? { uri: restaurantImage }
              : require('assets/img/restaurant/no-image.png')
          }
          PlaceholderContent={<ActivityIndicator color='#fff' />}
        />
        <View style={styles.ratingTitle}>
          <Text style={styles.restaurantTitle}>{name}</Text>
          <Rating
            imageSize={20}
            startingValue={rating}
            readonly
          />
        </View>
        <Text style={styles.restaurantDescription}>
          {description.length > truncate
            ? description.substr(0, truncate) + '...'
            : description}
        </Text>
      </Card>
    </TouchableOpacity>
  )
}
