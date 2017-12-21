import React from 'react'
import { connect } from 'react-redux'
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
        <Post key={key} id={key} data={favorites.dict[key]} isFavorite />
      )}
  </div>

export default connect(state => state)(Favorites)
