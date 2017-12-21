import { database } from '../../lib/firebase'

const ref = database.ref('favorites')

export default {
  listenToFavorites() {
    return dispatch =>
      ref.on('value', snapshot => dispatch({ type: 'FAVORITES_RECEIVED', payload: snapshot.val() }))
  },
  addFavorite({ id, data }) {
    return async dispatch => {
      await ref.child(id).set(data)
      dispatch({ type: 'FAVORITE_ADDED', payload: { id, data } })
    }
  },
  removeFavorite(id) {
    return async dispatch => {
      await ref.child(id).remove()
      dispatch({ type: 'FAVORITE_REMOVED', payload: { id } })
    }
  },
}
