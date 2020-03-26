import React, { Component } from "react"
import { connect } from "react-redux"
import { addPost } from "../Redux/Actions"
class PostForm extends Component {
  state = {
    newPost: { title: "", body: "" }
  }
  handleChange = e => {
    e.preventDefault()
    const newPost = { ...this.state.newPost }
    newPost.title = e.target.value
    this.setState({
      newPost
    })
  }
  handText = e => {
    const newPost = { ...this.state.newPost }
    newPost.body = e.target.value
    this.setState({
      newPost
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.addPost(this.state.newPost)
    this.setState({
      newPost: { title: "", body: "" }
    })
  }

  render() {
    return (
      <div>
        <h1>Create Post</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.newPost.title}
            onChange={this.handleChange}
            type="text"
            placeholder="Enter Post Title"
          />
          <br />
          <br />
          <textarea
            value={this.state.newPost.body}
            onChange={this.handText}
            rows="5"
            cols="28"
            placeholder="Enter Post"
          />
          <br />
          <br />
          <button>Post</button>
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    state: state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addPost: newPost => dispatch(addPost(newPost))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
