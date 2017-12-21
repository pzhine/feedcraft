import React from 'react'
import { connect } from 'react-redux'
import actions from '../../store/favorites/actions'
import styles from './styles.scss'

const Post = ({ data }) =>
  <article className={styles.post}>
    {data.title}
  </article>

export default connect(null, actions)(Post)
