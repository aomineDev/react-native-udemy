import * as firebase from 'firebase'

const db = firebase.firestore()

export function getLimitRestaurants (limit) {
  return db.collection('restaurants')
    .orderBy('createAt', 'desc')
    .limit(limit)
    .get()
}

export function getMoreRestaurants (start, limit) {
  return db.collection('restaurants')
    .orderBy('createAt', 'desc')
    .startAfter(start.data().createAt)
    .limit(limit)
    .get()
}
