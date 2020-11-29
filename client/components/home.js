import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'
import Header from './header'
import Users from './users'
import User1 from './user1'

const Home = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users`).then(({ data }) => setUsers(data))
  }, [])
  return (
    <div>
      <Header />
      <Route exact path="/users" component={() => <Users users={users} />} />
      <Route exact path="/mynameis/:username" component={() => <User1 users={users} />} />
    </div>
  )
}

Home.propTypes = {}

export default Home
