const Footer = () => {
  return (
    <footer className='font-kanit'>
      <div className='mx-auto w-1/2 pt-1 bg-slate-800 rounded'></div>
      <ul className='flex gap-5 justify-center py-2'>
        <li> &copy; Md. Ariful Islam</li>
        <li> | </li>
        <li
          className='rounded-md transition-all hover:border-b-2
              hover:shadow-slate-300  hover:shadow-sm hover:text-slate-600 hover:transition-all'
        >
          <a href='https://github.com/arifulrony10'>Github</a>
        </li>
        <li> | </li>
        <li
          className='rounded-md transition-all hover:border-b-2
              hover:shadow-slate-300  hover:shadow-sm hover:text-slate-600 hover:transition-all'
        >
          <a href='https://www.linkedin.com/in/arifulrony10/'>Linkedin</a>
        </li>
        <li> | </li>
        <li
          className='rounded-md transition-all hover:border-b-2
              hover:shadow-slate-300  hover:shadow-sm hover:text-slate-600 hover:transition-all'
        >
          <a href='mailto:hi@ariful.me'>E-Mail</a>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
