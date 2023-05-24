const Footer = () => {
  return (
    <footer className='font-kanit my-4'>
      <div className='mx-auto w-1/2 pt-1 bg-slate-800 rounded'></div>
      <ul className='flex gap-5 justify-center py-2'>
        <li> &copy; Md. Ariful Islam</li>
        <li> | </li>
        <li
          className='hover:text-slate-500 px-2 transition-all'
        >
          <a href='https://github.com/arifulrony10' target="_blank">Github</a>
        </li>
        <li> | </li>
        <li
          className='hover:text-slate-500 px-2 transition-all'
        >
          <a href='https://www.linkedin.com/in/arifulrony10/' target="_blank">Linkedin</a>
        </li>
        <li> | </li>
        <li
          className='hover:text-slate-500 px-2 transition-all'
        >
          <a href='mailto:hi@ariful.me' target="_blank">E-Mail</a>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
