import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import firebase from 'firebase'
import app from './app/reducer'
import config from '../config.json'

firebase.initializeApp(config.firebase)

const reducer = combineReducers({ app, firebase: firebaseReducer })
const middlewares = [thunk]
if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger())
}
const enhancer = compose(
  reactReduxFirebase(firebase, { userProfile: 'users' }),
  applyMiddleware(...middlewares)
)

export default createStore(reducer, {}, enhancer)
