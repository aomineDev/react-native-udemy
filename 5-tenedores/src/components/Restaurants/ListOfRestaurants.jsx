import React from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Restaurant from './Restaurant'
import LoadMoreRestaurants from './LoadMoreRestaurants'
import LoaderComponent from 'components/Shared/LoaderComponent'

export default function LitOfRestaurants ({ restaurants, handleLoadMore, isLoading }) {
  const navigation = useNavigation()

  return (
    <>
      {restaurants.length > 0 ? (
        <FlatList
          data={restaurants}
          renderItem={(restaurant) => <Restaurant restaurant={restaurant} navigation={navigation} />}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0.1}
          onEndReached={handleLoadMore}
          ListFooterComponent={<LoadMoreRestaurants isLoading={isLoading} />}
        />
      ) : (
        <LoaderComponent />
      )}
    </>
  )
}
