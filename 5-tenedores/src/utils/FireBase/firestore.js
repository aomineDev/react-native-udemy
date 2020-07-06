import * as firebase from 'firebase'

const db = firebase.firestore()

export function create (collection, data, needAvatar) {
  const user = firebase.auth().currentUser

  let payload

  payload = {
    ...data,
    createAt: new Date(),
    createBy: user.uid
  }

  if (needAvatar) {
    payload = {
      ...payload,
      avatarUser: user.photoURL
    }
  }

  return db.collection(collection)
    .add(payload)
}

export function remove (collection, id) {
  return db.collection(collection)
    .doc(id)
    .delete()
}

export function get (collection, id) {
  return db.collection(collection)
    .doc(id)
    .get()
}

export function getAll (collection) {
  return db.collection(collection)
    .get()
}

export function getDocRef (collection, id) {
  return db.collection(collection)
    .doc(id)
}

export function getRef (collection) {
  return db.collection(collection)
}
