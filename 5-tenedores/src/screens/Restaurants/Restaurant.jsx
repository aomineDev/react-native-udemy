import React from 'react'
import { View, Text } from 'react-native'

export default function Restaurant ({ route }) {
  const { params: { id, name } } = route
  console.log(id, name)

  return (
    <View>
      <Text>Restaurat</Text>
    </View>
  )
}
