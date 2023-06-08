import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/navbar.component';
import Footer from '../components/footer/footer.component';

const MainLayout = () => {
  return (
    <div className='container-fluid'>
      <header className='row' style={{ minHeight: '10vh' }}>
        <Navbar />
      </header>
      <main className='container' style={{ minHeight: '80vh' }}>
        <Outlet />
      </main>
      <footer className='row' style={{ minHeight: '10vh' }}>
        <Footer />
      </footer>
    </div>
  );
};
export default MainLayout;
