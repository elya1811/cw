import React from 'react'

const Users = ({ users }) => {
  return (
    <div>
      {users.map((el) => {
        return <div key={el.id}>{el.name}</div>
      })}
    </div>
  )
}

export default Users
