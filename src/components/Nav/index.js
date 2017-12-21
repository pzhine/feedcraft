import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import cx from 'classnames'
import styles from './styles.scss'

const Nav = ({ favorites }) =>
  <div className={styles.nav}>
    <nav className={styles.bar}>
      <Link to={'/feed'}>
        <i className={cx(styles.fab, styles['fa-reddit-alien'])} />
        Feed
      </Link>
      <Link to={'/favorites'}>
        <i className={cx(styles.fas, styles['fa-heart'])} />
        Favorites
        {favorites.isLoaded &&
          <span>
            ({favorites.isEmpty ? '0' : Object.keys(favorites.dict).length})
          </span>}
      </Link>
    </nav>
  </div>

export default connect(state => state)(Nav)
