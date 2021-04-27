import React, { useState, useEffect } from 'react'
import UserForm from './UserForm.js'

const Container = () => {
  const [userName, setUserName] = useState("Test01")
  const [directions, setDirections]= useState("")

  useEffect(() => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username:userName})
    } 
    fetch('https://wk16-backend.herokuapp.com/start',options)
    .then(response => response.json())
    .then(data =>setDirections(data)) 
  },[])
  console.log(directions)


  return (
      <div>
      <UserForm/> 
      </div>
  )
}

export default Container