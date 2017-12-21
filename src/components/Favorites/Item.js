import React from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import actions from '../../store/favorites/actions'
import styles from './styles.scss'

const Item = ({ id, removeFavorite, children }) =>
  <div className={styles.item}>
    <div className={styles.controls}>
      <button onClick={() => removeFavorite(id)}>
        <i className={cx(styles.fas, styles['fa-trash-alt'])} />
      </button>
    </div>
    {children}
  </div>

export default connect(null, actions)(Item)
