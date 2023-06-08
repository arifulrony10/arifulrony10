import { Link, NavLink } from 'react-router-dom';
import { HiOutlineExternalLink } from 'react-icons/hi';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-transparent fw-bold'>
      <div className='container'>
        <Link to={'/'} className='text-center rm-title navbar-brand fw-bold'>
          /ariful
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarNav'
        >
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink
                activeclassname='active'
                to={'/'}
                className='nav-link'
                aria-current='page'
              >
                ../home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                activeclassname='active'
                to={'/about'}
                className='nav-link'
              >
                ./about
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                activeclassname='active'
                to={'/projects'}
                className='nav-link'
              >
                ./projects
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                activeclassname='active'
                to={'https://ariful.tiiny.site/'}
                target='_blank'
                rel='noopener noreferrer'
                className='nav-link'
              >
                ./resume <HiOutlineExternalLink />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
