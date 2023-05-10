import { NavLink } from 'react-router-dom';
import NavBarLink from '../NavBarLink/NavBarLink';

const Navbar = () => {
  const menuLinks = [
    {
      id: 1,
      url: '/',
      title: 'Home',
    },
    {
      id: 2,
      url: 'about',
      title: 'About',
    },
    {
      id: 3,
      url: 'projects',
      title: 'Projects',
    },
    {
      id: 4,
      url: 'resume',
      title: 'Resume',
    },
  ];
  return (
    <div>
      <div className='mx-auto w-1/2 pt-1 bg-slate-800 rounded'></div>
      <ul className='flex justify-center items-center my-4'>
        {menuLinks.map((link) => (
          <NavBarLink key={link.id} navlink={link} />
        ))}
      </ul>
      <div className='mx-auto w-1/2 pt-1 bg-slate-800 rounded'></div>
    </div>
  );
};
export default Navbar;
