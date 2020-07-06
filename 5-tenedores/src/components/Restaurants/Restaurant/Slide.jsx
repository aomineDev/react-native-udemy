import React from 'react'
import { Image } from 'react-native-elements'

export default function Slide ({ item, width, height }) {
  return (
    <Image
      style={{ width, height }}
      source={{ uri: item }}
    />
  )
}
