import * as firebase from 'firebase'

const db = firebase.firestore()

export function uploadData (collection, data) {
  data = {
    ...data,
    createBy: firebase.auth().currentUser.uid
  }

  return db.collection(collection)
    .add(data)
}

export function getAllData (collection) {
  return db.collection(collection)
    .get()
}

export function getData () {

}
