import React from 'react'
import { SearchBar } from 'react-native-elements'

export default function Bar ({ search, setSearch }) {
  return (
    <SearchBar
      placeholder='Busca tu restaurante...'
      onChangeText={e => setSearch(e)}
      value={search}
    />
  )
}
