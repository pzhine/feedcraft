import React from 'react'
import { connect } from 'react-redux'
import actions from '../../redux/app/actions'
import styles from './styles.scss'

const Post = ({ data }) =>
  <article className={styles.post}>
    {data.title}
  </article>

export default connect(state => state, actions)(Post)
