import './App.css'

import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [listOfUsers, setListOfUsers] = useState([])
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [username, setUsername] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/getUsers').then((response) => {
      setListOfUsers(response.data)
    })
  }, [listOfUsers])

  const createUser = () => {
    axios
      .post('http://localhost:3001/createUser', { name, age, username })
      .then((response) => {
        alert('사용자 등록 성공')
        setListOfUsers([...listOfUsers, { name, age, username }])
      })
  }

  return (
    <div className="App">
      <h1>사용자 목록</h1>
      <div className="grid">
        {listOfUsers.map((user) => {  
          return (
            <div className="list">
              <h4>Name: {user.name},</h4>
              <p>
                Age: {user.age}, Username:{user.username}
              </p>
              
            </div>
          )
        })}
      </div>
      < div className = "register">
        <input className = "input"
          type="text"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(event) => setAge(event.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <button className = "button" onClick={createUser}>사용자 등록</button>
      </div>
    </div>
  )
}
export default App
