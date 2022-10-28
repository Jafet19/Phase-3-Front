import React, { useEffect, useState } from "react"
import {Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./components/home";
import Post from "./components/post";
import Users from "./components/user";


function App() {
  const [user,setUser] = useState([])
  const [posts, setPosts] = useState([])
  const [info, setInfo] = useState([])

  useEffect(()=>{
    fetch('http://localhost:9292/details')
    .then((res) => res.json())
    .then(data => setUser(data))
  },[])

  useEffect(()=>{
    fetch('http://localhost:9292/posts')
    .then((res) => res.json())
    .then(data => setPosts(data))
  },[])

  useEffect(()=>{
    fetch('http://localhost:9292/signup/info')
    .then((res) => res.json())
    .then(data => setInfo(data))
  },[])


  return (
    <div>
       <Routes>
        <Route exact path="/" element={<Home user={user}/>}/>
        <Route exact path="/posts" element={<Post posts={posts} info={info}/>}/>
        <Route exact path="/accounts" element={<Users user={user} posts={posts} info={info}/>}/>
      </Routes>
      </div>
  )
}

export default App;
