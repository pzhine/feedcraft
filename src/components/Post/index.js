import React from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import actions from '../../store/favorites/actions'
import styles from './styles.scss'

const Post = ({ data, id, isFavorite, addFavorite, removeFavorite }) =>
  <article className={styles.post}>
    <div className={styles.controls}>
      {isFavorite
        ? <button onClick={() => removeFavorite(id)}>
            <i className={cx(styles.fas, styles['fa-trash-alt'])} />
          </button>
        : <button onClick={() => addFavorite({ id, data })}>
            <i className={cx(styles.fas, styles['fa-heart'])} />
          </button>}
    </div>
    {data.title}
  </article>

export default connect(null, actions)(Post)
