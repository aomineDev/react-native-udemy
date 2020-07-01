import React from 'react'
import { View, Text } from 'react-native'
import { ListItem } from 'react-native-elements'

import Map from '../Map'

import styles from './styles'

export default function RestaurantInfo ({ location, name, address }) {
  const listInfo = [
    {
      key: 1,
      title: address,
      iconName: 'place',
      action: null
    },
    {
      key: 2,
      title: '922 764 271',
      iconName: 'phone',
      action: null
    },
    {
      key: 3,
      title: 'aomine@gmail.com',
      iconName: 'email',
      action: null
    }
  ]

  return (
    <View style={styles.viewRestaurantInfo}>
      <Text style={styles.restaurantInfoTitle}>Información sobre el restaurante</Text>
      <Map location={location} name={name} height={100} />
      {listInfo.map(item => (
        <ListItem
          key={item.key}
          title={item.title}
          leftIcon={{
            name: item.iconName,
            color: '#00a680'
          }}
          containerStyle={styles.containerListItem}
        />
      ))}
    </View>
  )
}
