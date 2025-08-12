import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import RootLayout from './RootLayout';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <ProductList /> },
        { path: "cart", element: <Cart /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
