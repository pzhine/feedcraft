import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../store/app/actions'
import Post from '../Post'
import Controls from './Controls'
import MessagePanel from '../MessagePanel'
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
              <Post
                key={post.data.id}
                data={post.data}
                id={post.data.id}
                renderControls={props => <Controls {...props} />}
              />
            )
          : <MessagePanel>Loading...</MessagePanel>}
      </section>
    )
  }
}

export default connect(state => state, actions)(Feed)
