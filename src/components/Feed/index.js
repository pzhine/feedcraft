import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../store/app/actions'
import Item from './Item'
import Post from '../Post'
import styles from './styles.scss'

class Feed extends Component {
  componentWillMount() {
    this.props.fetchFeed()
  }
  render() {
    const { app } = this.props
    return (
      <section className={styles.feed}>
        {app.feed
          ? app.feed.data.children.map(post =>
              <Item key={post.data.id} data={post.data} id={post.data.id}>
                <Post data={post.data} />
              </Item>
            )
          : <div className={styles.loading}>loading...</div>}
      </section>
    )
  }
}

export default connect(state => state, actions)(Feed)
