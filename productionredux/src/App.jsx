import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components'

function App () {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => {
        if (data) {
          dispatch(login(data))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  })

  return (
    <>
      {!loading ? (
        <div className='h-screen w-screen flex flex-col bg-gray-400'>
          <Header />
          <main className='flex-1 flex items-center justify-center'>
            <p>Todo: </p>
          </main>
          <Footer />
        </div>
      ) : (
        <p className='text-2xl font-bold'>Loading...</p>
      )}
    </>
  )
}

export default App
