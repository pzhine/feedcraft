import { combineReducers } from 'redux'
import app from './app/reducer'
import favorites from './favorites/reducer'

export default combineReducers({ app, favorites })
