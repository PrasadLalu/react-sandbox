import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { store } from '../store/store'
import NavbarComponent from './NavbarComponent'

const RootLayout = () => {
  return (
    <Provider store={store}>
      <NavbarComponent />
      <main>
        <Outlet />
      </main>
    </Provider>
  )
}

export default RootLayout
