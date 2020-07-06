import React from 'react'
import { View } from 'react-native'
import { AirbnbRating } from 'react-native-elements'

import styles from './styles'

export default function Rating ({ setRating }) {
  return (
    <View style={styles.viewRating}>
      <AirbnbRating
        count={5}
        reviews={[
          'Pésimo',
          'Deficiente',
          'Normal',
          'Muy Bueno',
          '¡Excelente!'
        ]}
        defaultRating={0}
        size={35}
        onFinishRating={value => setRating(value)}
      />
    </View>
  )
}
