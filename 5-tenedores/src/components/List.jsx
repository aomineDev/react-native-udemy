import React from 'react'
import { FlatList } from 'react-native'

import ListFooter from 'components/ListFooter'

export default function List ({ data, setData, toastRef, renderItem, handleLoadMore, isLoading }) {
  const RenderItem = renderItem

  function removeItem (property, value) {
    const newItems = data.filter(e => e[property] !== value)
    setData(newItems)
  }

  if (!isLoading) {
    return (
      <FlatList
        data={data}
        renderItem={({ item, index }) => <RenderItem item={item} index={index} toastRef={toastRef} removeItem={removeItem} />}
        keyExtractor={({ id }) => id.toString()}
      />
    )
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => <RenderItem item={item} index={index} toastRef={toastRef} removeItem={removeItem} />}
      keyExtractor={({ id }) => id.toString()}
      onEndReachedThreshold={0.1}
      onEndReached={handleLoadMore}
      ListFooterComponent={<ListFooter isLoading={isLoading} />}
    />
  )
}
