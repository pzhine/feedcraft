import initialState from './initialState'

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_FEED': {
      return { ...state, ...action.payload }
    }
    default: {
      return state
    }
  }
}
