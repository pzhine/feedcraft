import React from 'react'
import { connect } from 'react-redux'
import { TransitionGroup } from 'react-transition-group'
import Controls from './Controls'
import Post from '../Post'
import MessagePanel from '../MessagePanel'
import Fade from '../Fade'

const Favorites = ({ favorites }) =>
  <TransitionGroup appear={false}>
    {!favorites.isLoaded &&
      <Fade>
        <MessagePanel>Loading...</MessagePanel>
      </Fade>}
    {favorites.isLoaded &&
      favorites.isEmpty &&
      <Fade>
        <MessagePanel>No favorites yet.</MessagePanel>
      </Fade>}
    {favorites.isLoaded &&
      !favorites.isEmpty &&
      Object.keys(favorites.dict).map(key =>
        <Fade key={favorites.dict[key].id}>
          <Post
            data={favorites.dict[key]}
            id={favorites.dict[key].id}
            renderControls={props => <Controls {...props} />}
          />
        </Fade>
      )}
  </TransitionGroup>

export default connect(state => state)(Favorites)
