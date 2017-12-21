import React from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import moment from 'moment'
import actions from '../../store/favorites/actions'
import styles from './styles.scss'

const Post = ({ data, id, renderControls }) =>
  <article className={styles.post}>
    <div className={styles.controls}>
      {renderControls({ data, id })}
    </div>
    <div className={styles.photo} style={{ backgroundImage: `url(${data.url})` }} />
    <div className={styles.title}>
      {data.title}
    </div>
    <div className={styles.stats}>
      <span>
        <i className={cx(styles.fas, styles['fa-user'])} />
        u/{data.author}
      </span>
      <span>
        <i className={cx(styles.fa, styles['fa-clock'])} />
        {moment.utc(data.created_utc).fromNow()}
      </span>
      <span>
        <i className={cx(styles.fas, styles['fa-bolt'])} />
        {data.ups}
      </span>
    </div>
  </article>

export default connect(null, actions)(Post)
