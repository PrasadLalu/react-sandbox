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
