import { actions } from '../actions'

const initialState = {
  posts: [],
  isFetching: false,
  error: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_POST_START:
      return {
        ...state,
        isFetching: true,
        error: null,
      }
    case actions.FETCH_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isFetching: false,
      }
    case actions.FETCH_POST_FAIL:
      return {
        ...state,
        error: action.err,
        isFetching: false,
      }
    default:
      return state
  }
}
