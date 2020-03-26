import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  DELETE_POST,
  ADD_NEW_POST
} from "./Constants"
import axios from "axios"

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}
export const fetchUsersSuccess = users => {
  console.log("payload", users)
  return {
    type: FETCH_USER_SUCCESS,
    payload: users
  }
}
export const fetchUsersFailure = error => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error
  }
}
export const deletePost = id => {
  console.log("deletepost", id)
  return {
    type: DELETE_POST,
    payload: id
  }
}
export const addPost = post => {
  return {
    type: ADD_NEW_POST,
    payload: post
  }
}

export const fetchUsers = () => {
  return dispatch => {
    console.log("fetch user")
    dispatch(fetchUsersRequest)
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        const users = response.data
        console.log("res", users)
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        const errorMsg = error.message
        fetchUsersFailure(errorMsg)
      })
  }
}
