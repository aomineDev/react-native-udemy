import React, { useState } from 'react'

import Wrapper from 'wrappers/Wrapper'
import Bar from 'cfs/Search/Bar'
import List from 'fdc/Search/List'

export default function Search () {
  const [search, setSearch] = useState('')

  return (
    <Wrapper>
      <Bar
        search={search}
        setSearch={setSearch}
      />
      <List
        search={search}
      />
    </Wrapper>
  )
}
