import React from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../redux/configureStore'
import styles from './styles.scss'

import ScrollToTop from '../ScrollToTop'
import Home from '../Feed'
import Favorites from '../Favorites'
import Nav from '../Nav'

const App = () =>
  <Provider store={store}>
    <ScrollToTop>
      <main className={styles.app}>
        <Nav />
        <div className={styles.body}>
          <Route exact path="/feed" component={Home} />
          <Route exact path="/favorites" component={Favorites} />
        </div>
      </main>
    </ScrollToTop>
  </Provider>

export default App
