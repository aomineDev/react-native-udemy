import * as firebase from 'firebase'
import { FireSQL } from 'firesql'

const fireSQL = new FireSQL(firebase.firestore(), { includeId: 'id' })

export default fireSQL
