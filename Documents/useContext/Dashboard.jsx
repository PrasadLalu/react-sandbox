import React, { useContext } from 'react'
import User from './User'
import { UserContext } from './UserContext'

function Dashboard () {
  const { user } = useContext(UserContext)
  return (
    <>
      <h1>Dashboard: {user}</h1>
      <User />
    </>
  )
}

export default Dashboard
