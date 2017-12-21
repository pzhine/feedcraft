import React from 'react'
import { Link, withRouter, matchPath } from 'react-router-dom'
import { connect } from 'react-redux'
import cx from 'classnames'
import styles from './styles.scss'

const data = [
  {
    path: '/feed',
    iconClass: cx(styles.fab, styles['fa-reddit-alien']),
    label: '/r/analog',
  },
  {
    path: '/favorites',
    iconClass: cx(styles.fas, styles['fa-heart']),
    label: 'favorites',
    renderBadge: ({ favorites }) =>
      favorites.isLoaded &&
      <span>
        ({favorites.isEmpty ? '0' : Object.keys(favorites.dict).length})
      </span>,
  },
]

const Nav = ({ favorites, location }) =>
  <div className={styles.nav}>
    <nav className={styles.bar}>
      {data.map(item =>
        <Link
          to={item.path}
          key={item.path}
          className={cx({ [styles.isActive]: Boolean(matchPath(location.pathname, item.path)) })}
        >
          <div className={styles.content}>
            <i className={item.iconClass} />
            {item.label}
            {item.renderBadge && item.renderBadge({ favorites })}
          </div>
        </Link>
      )}
    </nav>
  </div>

export default withRouter(connect(state => state)(Nav))
