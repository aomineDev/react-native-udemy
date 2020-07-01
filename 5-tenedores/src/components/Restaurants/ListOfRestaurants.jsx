import React from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import RestaurantItem from './RestaurantItem'
import LoadMoreRestaurants from './LoadMoreRestaurants'
import LoaderScreen from 'components/Shared/LoaderScreen'

export default function LitOfRestaurants ({ restaurants, handleLoadMore, isLoading }) {
  const navigation = useNavigation()

  return (
    <>
      {restaurants.length > 0 ? (
        <FlatList
          data={restaurants}
          renderItem={(restaurant) => <RestaurantItem restaurant={restaurant} navigation={navigation} />}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0.1}
          onEndReached={handleLoadMore}
          ListFooterComponent={<LoadMoreRestaurants isLoading={isLoading} />}
        />
      ) : (
        <LoaderScreen />
      )}
    </>
  )
}
