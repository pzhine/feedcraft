import React from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import styles from './styles.scss'

export default () =>
  <div className={styles.nav}>
    <nav className={styles.bar}>
      <Link to={'/feed'}>
        Feed <i className={cx(styles.fab, styles['fa-reddit-alien'])} />
      </Link>
      <Link to={'/favorites'}>
        Favorites <i className={cx(styles.fas, styles['fa-heart'])} />
      </Link>
    </nav>
  </div>
