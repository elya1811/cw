import React from 'react'
import { useParams } from 'react-router-dom'

const User1 = ({ users }) => {
  const { username } = useParams()
  const user = users.filter((el) => el.name.toLowerCase().includes(username.toLowerCase()))
  return (
    <div>
      {user.map((el) => {
        return <div key={el.id} className='font-bold mb-5'> My name is {el.name}.</div>
      })}
       {users.map((el) => {
          return <div key={el.id}>{el.name}</div>
        })}
    </div>
  )
}

export default User1
