# useContext hook

UserContext.jsx
```
import { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('John')
  const data = {
    user,
    setUser
  }
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

```
App.jsx
```
import { useState } from 'react'
import Dashboard from './components/Dashboard'
import { UserProvider } from './context/UserContext'

function App () {
  return (
    <>
      <UserProvider>
        <Dashboard />
      </UserProvider>
    </>
  )
}

export default App

```
Dashboard.jsx
```
import React, { useContext } from 'react'
import User from './User'
import { UserContext } from '../context/UserContext'

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

```
User.jsx
```
import React from 'react'
import Profile from './Profile'

function User () {
  return (
    <>
      <h1>User</h1>
      <Profile />
    </>
  )
}

export default User

```

Profile.jsx
```
import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

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

```