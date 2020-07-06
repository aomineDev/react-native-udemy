import React from 'react'

import LoaderComponent from 'components/Shared/LoaderComponent'

export default function ListFooter ({ isLoading }) {
  if (isLoading) {
    return (
      <LoaderComponent />
    )
  } else {
    return (
      <></>
    )
  }
}
