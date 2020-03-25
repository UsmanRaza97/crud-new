import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from "./Constants"
import axios from "axios"

export const fetchUsersRequest = () => {
  return {
    typer: FETCH_USER_REQUEST
  }
}
export const fetchUsersSuccess = user => {
  return {
    typer: FETCH_USER_SUCCESS,
    payload: user
  }
}
export const fetchUsersFailure = error => {
  return {
    typer: FETCH_USER_FAILURE,
    payload: error
  }
}

export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersRequest)
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        const users = response.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        const errorMsg = error.message
        fetchUsersFailure(errorMsg)
      })
  }
}
