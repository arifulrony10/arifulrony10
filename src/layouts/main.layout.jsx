import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/navbar.component';
import Footer from '../components/footer/footer.component';

const MainLayout = () => {
  return (
    <div className='container-fluid'>
      <header className='row'>
        <Navbar />
      </header>
      <main className='container my-2'>
        <Outlet />
      </main>
      <footer className='row'>
        <Footer />
      </footer>
    </div>
  );
};
export default MainLayout;
