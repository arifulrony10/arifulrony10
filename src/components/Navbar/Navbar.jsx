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
      <ul className='flex justify-center items-center mt-5'>
        {menuLinks.map((link) => (
          <NavBarLink key={link.id} navlink={link} />
        ))}
      </ul>
    </div>
  );
};
export default Navbar;
