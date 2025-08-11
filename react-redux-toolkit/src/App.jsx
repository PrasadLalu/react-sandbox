import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import Cart from './components/Cart'
import Dashboard from './components/Dashboard'
import RootLayout from './components/RootLayout'

function App () {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='/cart' element={<Cart />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
