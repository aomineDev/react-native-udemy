import React from 'react'
import { FlatList } from 'react-native'

import Restaurant from './Restaurant'
import ListFooter from 'components/ListFooter'
import LoaderScreen from 'components/Shared/LoaderScreen'

export default function LitOfRestaurants ({ restaurants, handleLoadMore, isLoading }) {
  return (
    <>
      {restaurants.length > 0 ? (
        <FlatList
          data={restaurants}
          renderItem={restaurant => <Restaurant restaurant={restaurant} />}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0.1}
          onEndReached={handleLoadMore}
          ListFooterComponent={<ListFooter isLoading={isLoading} />}
        />
      ) : (
        <LoaderScreen />
      )}
    </>
  )
}
