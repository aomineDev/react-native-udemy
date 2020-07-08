import React from 'react'

import Review from './Review'

export default function ReviewsList ({ reviews }) {
  return (
    <>
      {reviews.map(review => (
        <Review
          data={review}
          key={review.id}
        />
      ))}
    </>
  )
}
