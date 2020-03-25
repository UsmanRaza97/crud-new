import React from "react"
import { connect } from "react-redux"
import { deletePost } from "../Redux/Actions"
const Post = ({ post, deletePost, id }) => {
  return (
    <div
      style={{
        borderTop: "1px solid"
      }}
    >
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button>Edit</button>
      <button onClick={() => deletePost(id)}>Delete</button>
    </div>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    deletePost: key => dispatch(deletePost(key))
  }
}
const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
