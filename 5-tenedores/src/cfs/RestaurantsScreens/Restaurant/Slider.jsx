import React from 'react'
import Carousel from 'react-native-snap-carousel'

import Slide from './Slide'

export default function Slider ({ arrayImages, height, width }) {
  return (
    <Carousel
      layout='default'
      data={arrayImages}
      sliderWidth={width}
      itemWidth={width}
      renderItem={({ item }) => <Slide item={item} width={width} height={height} />}
    />
  )
}
