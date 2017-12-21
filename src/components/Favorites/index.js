import React from 'react'
import { connect } from 'react-redux'
import Controls from './Controls'
import Post from '../Post'
import styles from './styles.scss'

const Favorites = ({ favorites }) =>
  <div className={styles.favorites}>
    {!favorites.isLoaded && <div className={styles.loading}>Loading...</div>}
    {favorites.isLoaded &&
      favorites.isEmpty &&
      <div className={styles.empty}>No favorites yet</div>}
    {favorites.isLoaded &&
      !favorites.isEmpty &&
      Object.keys(favorites.dict).map(key =>
        <Post
          data={favorites.dict[key]}
          key={favorites.dict[key].id}
          id={favorites.dict[key].id}
          renderControls={props => <Controls {...props} />}
        />
      )}
  </div>

export default connect(state => state)(Favorites)
