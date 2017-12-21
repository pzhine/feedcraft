import * as firebase from 'firebase'
import config from '../config.json'

firebase.initializeApp(config.firebase)

export const database = firebase.database()
