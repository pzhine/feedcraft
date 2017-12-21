import React from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import actions from '../../store/favorites/actions'
import styles from './styles.scss'

const Controls = ({ id, removeFavorite }) =>
  <button onClick={() => removeFavorite(id)}>
    <i className={cx(styles.fas, styles['fa-trash-alt'])} />
  </button>

export default connect(null, actions)(Controls)
