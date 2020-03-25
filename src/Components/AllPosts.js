import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchUsers } from "../Redux/Actions"
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
      <button onClick={() => fetchUsers()}>hun kar</button>
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
