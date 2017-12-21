import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store/configureStore'
import favoritesActions from '../../store/favorites/actions'
import styles from './styles.scss'

import ScrollToTop from '../ScrollToTop'
import Home from '../Feed'
import Favorites from '../Favorites'
import Nav from '../Nav'

class App extends Component {
  componentWillMount() {
    store.dispatch(favoritesActions.listenToFavorites())
  }
  render() {
    return (
      <Provider store={store}>
        <ScrollToTop paths={['/favorites']}>
          <main className={styles.app}>
            <Nav />
            <div className={styles.body}>
              <Route exact path="/feed" render={() => <Home />} />
              <Route exact path="/favorites" render={() => <Favorites />} />
            </div>
          </main>
        </ScrollToTop>
      </Provider>
    )
  }
}

export default App
