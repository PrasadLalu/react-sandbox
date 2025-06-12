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
