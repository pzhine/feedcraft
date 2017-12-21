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
    <a href={data.url} target="_blank">
      <div
        className={styles.photo}
        style={{ backgroundImage: `url(${data.preview.images[0].source.url})` }}
      />
    </a>
    <div className={styles.title}>
      <a href={data.url} target="_blank">
        {data.title}
      </a>
    </div>
    <div className={styles.stats}>
      <span>
        <i className={cx(styles.fas, styles['fa-user'])} />
        <a href={`https://reddit.com/u/${data.author}`} target="_blank">
          u/{data.author}
        </a>
      </span>
      <span>
        <i className={cx(styles.fa, styles['fa-clock'])} />
        {moment.unix(data.created_utc).utcOffset(new Date().getTimezoneOffset()).fromNow()}
      </span>
      <span>
        <i className={cx(styles.fas, styles['fa-bolt'])} />
        {data.ups}
      </span>
    </div>
  </article>

export default connect(null, actions)(Post)
