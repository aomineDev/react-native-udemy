import * as firebase from 'firebase'

const db = firebase.firestore()

export function uploadData (root, data) {
  data = {
    ...data,
    createBy: firebase.auth().currentUser.uid
  }

  return db.collection(root).add(data)
}
