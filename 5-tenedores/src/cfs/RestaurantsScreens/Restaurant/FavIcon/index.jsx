import React from 'react'
import { View } from 'react-native'
import { Icon } from 'react-native-elements'

import styles from './styles'

export default function Favorite ({ isFavorite, isDisabled, ...props }) {
  return (
    <View style={styles.viewFavorite}>
      <Icon
        name={isFavorite ? 'favorite' : 'favorite-border'}
        color={isFavorite ? '#f00' : '#000'}
        underlayColor='transparent'
        size={32}
        disabled={isDisabled}
        disabledStyle={{ backgroundColor: 'transparent' }}
        {...props}
      />
    </View>
  )
}
