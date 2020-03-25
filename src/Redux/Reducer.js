import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  DELETE_POST
} from "./Constants"

const initialState = {
  loading: false,
  users: [],
  error: ""
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ""
      }
    case FETCH_USER_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
    case DELETE_POST:
      return {
        ...state,
        users: state.users.filter(post => post.id !== action.payload)
      }
    default:
      return state
  }
}
export default Reducer
