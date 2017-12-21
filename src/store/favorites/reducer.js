import initialState from './initialState'

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'FAVORITES_RECEIVED': {
      return {
        ...state,
        isLoaded: true,
        dict: action.payload,
        isEmpty: !action.payload || !Object.keys(action.payload).length,
      }
    }
    default: {
      return state
    }
  }
}
