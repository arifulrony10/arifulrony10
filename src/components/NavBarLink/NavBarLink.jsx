import { NavLink } from 'react-router-dom';

const NavBarLink = ({ navlink }) => {
  const { url, title } = navlink;

  return (
    <li className='transition-all hover:-translate-y-1 hover:transition-all'>
      <NavLink
        to={url}
        className='font-oswald uppercase tracking-widest px-4 py-2 mx-2 rounded-md transition-all hover:border-b-2
        hover:shadow-slate-300  hover:shadow-md hover:text-slate-600 hover:transition-all'
      >
        {title}
      </NavLink>
    </li>
  );
};
export default NavBarLink;
