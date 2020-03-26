import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchUsers } from "../Redux/Actions"
import Post from "./Post"
function AllPost({ fetchUsers, users }) {
  // state = {  }
  // useEffect(() => {
  //   fetchUsers()
  //   // props.fetchUsers()
  // }, [])
  console.log("users props", users)
  return (
    <div>
      <h1>All Posts</h1>
      {users.map(user => (
        <Post post={user} id={user.id} key={user.id} />
      ))}
      <button onClick={() => fetchUsers()}>Get Posts</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}
const mapDispatchToProps = disptach => {
  return {
    fetchUsers: () => disptach(fetchUsers())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllPost)
