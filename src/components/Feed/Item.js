import React from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import actions from '../../store/favorites/actions'
import styles from './styles.scss'

const Item = ({ id, data, addFavorite, favorites, children }) => {
  const isFavorite = favorites.isLoaded && !favorites.isEmpty && favorites.dict[id]
  return (
    <div className={styles.item}>
      <div className={cx(styles.controls, { [styles.isFavorite]: isFavorite })}>
        <button onClick={() => addFavorite({ id, data })}>
          <i className={cx(styles.fas, styles['fa-heart'])} />
        </button>
      </div>
      {children}
    </div>
  )
}

export default connect(state => state, actions)(Item)
