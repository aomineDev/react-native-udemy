import React from 'react'
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Image } from 'react-native-elements'

import styles from './styles'

export default function Restaurants ({ restaurants, handleLoadMore, isLoading }) {
  return (
    <>
      {restaurants.length > 0 ? (
        <FlatList
          data={restaurants}
          renderItem={(restaurant) => <Restaurant restaurant={restaurant} />}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0.5}
          onEndReached={handleLoadMore}
          ListFooterComponent={<FooterList isLoading={isLoading} />}
        />
      ) : (
        <View style={styles.viewLoader}>
          <ActivityIndicator size='large' />
        </View>
      )}
    </>
  )
}

function Restaurant ({ restaurant }) {
  const {
    item: {
      images,
      name,
      address,
      description
    }
  } = restaurant
  const restaurantImage = images[0]
  const truncate = 60

  function goRestaurant () {
    console.log(name)
  }

  return (
    <TouchableOpacity onPress={goRestaurant}>
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

function FooterList ({ isLoading }) {
  if (isLoading) {
    return (
      <View style={styles.viewLoader}>
        <ActivityIndicator size='large' />
      </View>
    )
  } else {
    return (
      <></>
    )
  }
}
