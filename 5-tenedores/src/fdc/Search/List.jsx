import React, { useState, useEffect } from 'react'

import fireSQL from 'utils/FireBase/firesql'

import NotFound from 'cfs/Search/NotFound'
import Item from 'cfs/Search/Item'
import List from 'components/List'

export default function RestaurantsList ({ search }) {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    if (!search) return

    fireSQL
      .query(`SELECT * FROM restaurants WHERE name LIKE '${search}%' ORDER BY name DESC`)
      .then(resposnse => {
        setRestaurants(resposnse)
      })
  }, [search])

  if (!restaurants.length) return <NotFound />

  return (
    <List
      data={restaurants}
      renderItem={Item}
    />
  )
}
