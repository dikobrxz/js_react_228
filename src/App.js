import './App.css';
import React, { useEffect, useState } from 'react';
import {Card} from 'antd'

function App() {
  const [counter, setCounter] = useState()
  const [users, setUsers] = useState([])

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        if (res && Array.isArray(res) && res.length > 0) {
          setUsers(res)
        }
      })

  }

  const loadUsers = () => {
    getData()
  }

  useEffect(() => {
    getData()
  }, [])

  return(
    <>
      <h2>  Users: <button type="" onClick={() => {loadUsers()}}>Load users</button></h2>
      <div style={{margin: 50, display: 'grid', gap: 16}}>
        {users.length > 0 &&
          users.map(user => {
            return( <Card title={user.name} key={Math.random()} headStyle={{backgroundColor: '#AFEEEE', borderColor: '#000000'}} style={{width: 600, margin:10, backgroundColor: '#E0FFFF', borderColor: '#000000'}}>
              <p  style={{width: 200, margin:10}}><strong style = {{color: '#FF4500'}}>Nickname:</strong> {user.username}</p>
              <p  style={{width: 300, margin:10}}><strong style = {{color: '#FF8C00'}}>Email:</strong> {user.email}</p>
              <p  style={{width: 300, margin:10}}><strong style = {{color: '#6A5ACD'}}>Phone:</strong> {user.phone}</p>
              <p  style={{width: 300, margin:10}}><strong style = {{color: '#006400'}}>Website:</strong> {user.website}</p>
              
              </Card>
              )
          })
        }
      </div>
    </>
  )
}

export default App;