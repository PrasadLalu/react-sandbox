import React, { useContext } from 'react'
import { UserContext } from './UserContext'

function Profile () {
  const { setUser } = useContext(UserContext)
  return (
    <>
      <h1>Profile</h1>
      <button onClick={() => setUser('Doe')}>Update Name</button>
    </>
  )
}

export default Profile
