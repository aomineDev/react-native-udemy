import React from 'react'

import Wrapper from 'wrappers/Wrapper'
import List from 'fdc/Restaurants/List'
import AddRestaurantButton from 'fdc/Restaurants/AddRestaurantButton'

export default function Restaurant ({ navigation }) {
  function handlePress () {
    navigation.navigate('add-restaurant')
  }

  return (
    <Wrapper>
      <List />
      <AddRestaurantButton
        onPress={handlePress}
      />
    </Wrapper>
  )
}
