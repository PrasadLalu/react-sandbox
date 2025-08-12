import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout