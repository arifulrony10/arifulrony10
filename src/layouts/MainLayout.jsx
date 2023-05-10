import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import TopHeader from '../components/TopHeader/TopHeader';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  return (
    <div className='w-screen h-screen max-w-[80%] m-auto'>
      <TopHeader />
      <Navbar />
      <div className='my-5 py-5 min-h-[80vh]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default MainLayout;
