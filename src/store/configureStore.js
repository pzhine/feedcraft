import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'

const middlewares = [thunk]
if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger())
}

const store = createStore(reducers, {}, applyMiddleware(...middlewares))

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers')
    store.replaceReducer(nextRootReducer)
  })
}

export default store
