import * as firebase from 'firebase/app'

const db = firebase.firestore()

export function uploadData (root, data) {
  data = {
    ...data,
    createBy: firebase.auth().currentUser.uid
  }

  return db.collection(root).add(data)
}
