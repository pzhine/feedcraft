import initialState from './initialState'

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'FEED_RECEIVED': {
      return { ...state, ...action.payload }
    }
    default: {
      return state
    }
  }
}
