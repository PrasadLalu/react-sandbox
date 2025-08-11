## useMemo hook

User.jsx
```
import React, { useMemo, useState } from 'react'
import UserCard from './UserCard'

function User () {
  const usersList = [
    { id: 1, name: 'Dayal' },
    { id: 2, name: 'Arya' },
    { id: 3, name: 'Reema' },
    { id: 4, name: 'Neha' },
    { id: 5, name: 'Riya' }
  ]
  const [newUser, setNewUser] = useState('')
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(usersList)
  const displayList = useMemo(
    () =>
      users.map(user => {
        return <UserCard name={user.name} key={user.id} />
      }),
    [users]
  )
  const handleUser = () => {
    setUsers([
      ...users,
      {
        id: users.length + 1,
        name: newUser
      }
    ])
  }
  return (
    <>
      <h1>User</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
      {displayList}
      Add New User:
      <input type='text' onChange={e => setNewUser(e.target.value)}></input>
      <button onClick={handleUser}>Add User</button>
    </>
  )
}

export default User
```

UserCard.jsx
```
import React from 'react'

function UserCard ({ name }) {
  console.log('rendering...')
  return (
    <>
      <li> {name}</li>
    </>
  )
}

export default UserCard

```