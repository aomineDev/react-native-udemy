import * as firebase from 'firebase'

const db = firebase.firestore()

export async function getIdRestaurants (uid) {
  const favorites = []

  const querySnapshot = await db.collection('favorites').where('createBy', '==', uid).get()

  querySnapshot.forEach(doc => {
    const favorite = doc.data()
    favorite.id = doc.id
    favorites.push(favorite)
  })

  return favorites
}

export function getRestaurants (favorites) {
  const promises = []

  favorites.forEach(({ idRestaurant }) => {
    const promise = db.collection('restaurants').doc(idRestaurant).get()
    promises.push(promise)
  })

  return Promise.all(promises)
}
