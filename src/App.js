import React from "react"
import logo from "./logo.svg"
import "./App.css"
import AllPost from "./Components/AllPosts"
import PostForm from "./Components/PostForm"

function App() {
  return (
    <div className="App">
      <PostForm />
      <AllPost />
    </div>
  )
}

export default App
