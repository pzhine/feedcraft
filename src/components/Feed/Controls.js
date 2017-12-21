import React from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import actions from '../../store/favorites/actions'
import styles from './styles.scss'

const Controls = ({ id, data, addFavorite, favorites }) => {
  const isFavorite = favorites.isLoaded && !favorites.isEmpty && favorites.dict[id]
  return (
    <button
      className={cx({ [styles.isFavorite]: isFavorite })}
      onClick={() => addFavorite({ id, data })}
    >
      <i className={cx(styles.fas, styles['fa-heart'])} />
    </button>
  )
}

export default connect(state => state, actions)(Controls)
