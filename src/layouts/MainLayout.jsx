import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import TopHeader from '../components/TopHeader/TopHeader';

const MainLayout = () => {
  return (
    <div className='w-screen h-screen max-w-[80%] m-auto'>
      <TopHeader />
      <Navbar />
      <Outlet />
    </div>
  );
};
export default MainLayout;
