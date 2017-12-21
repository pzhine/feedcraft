import React from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import actions from '../../store/favorites/actions'
import styles from './styles.scss'

const Controls = ({ id, data, addFavorite, favorites }) => {
  const isFavorite = favorites.isLoaded && !favorites.isEmpty && favorites.dict[id]
  return (
    <div className={cx(styles.buttonContainer, { [styles.isFavorite]: isFavorite })}>
      <button onClick={() => addFavorite({ id, data })}>
        <i className={cx(styles.fas, styles['fa-heart'])} />
      </button>
    </div>
  )
}

export default connect(state => state, actions)(Controls)
