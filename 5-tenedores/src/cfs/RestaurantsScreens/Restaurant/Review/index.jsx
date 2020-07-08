import React from 'react'
import { View, Text } from 'react-native'
import { Avatar, Rating } from 'react-native-elements'

import { formatDate } from 'utils/formatDate'

import styles from './styles'

export default function Review ({ data }) {
  const { review, title, avatarUser, rating, createAt } = data
  const formattedDate = formatDate(createAt)

  return (
    <View style={styles.viewReview}>
      <View style={styles.viewAvatar}>
        <Avatar
          size='large'
          rounded
          containerStyle={styles.containerAvatar}
          source={{ uri: avatarUser ?? 'https://api.adorable.io/avatars/285/adorable.png' }}
        />
      </View>
      <View style={styles.viewInfo}>
        <Text style={styles.reviewTitle}>{title}</Text>
        <Text style={styles.reviewContent}>{review}</Text>
        <Rating
          imageSize={15}
          startingValue={rating}
          readonly
        />
        <Text style={styles.reviewDate}>
          {formattedDate}
        </Text>
      </View>
    </View>
  )
}
