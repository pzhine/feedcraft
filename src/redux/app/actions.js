import axios from 'axios'
import config from '../../config.json'

export default {
  fetchFeed() {
    const { feedEndpoint } = config
    return async dispatch => {
      dispatch({
        type: 'FETCH_FEED',
      })
      const payload = {
        feed: null,
        error: null,
      }
      try {
        payload.feed = (await axios.get(feedEndpoint)).data
      } catch (err) {
        payload.error = {
          message: 'There was a problem retrieving your reddit feed',
          innerError: err,
        }
      }
      return dispatch({
        type: 'RECEIVE_FEED',
        payload,
      })
    }
  },
}
