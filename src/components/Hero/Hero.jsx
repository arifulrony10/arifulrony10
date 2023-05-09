import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='font-openSans'>
      <article>
        <div className='flex justify-center items-center my-4'>
          <img
            className='object-cover w-1/4 rounded-md'
            src='https://i.ibb.co/Lp3RcCc/Md-Ariful-Islam-B-W-Squire.png'
            alt="Ariful Islam's Picture"
          />
        </div>
        <p>
          Hello, I'm <b>Md. Ariful Islam</b> A software engineer based in Dhaka.
          Currently working at Kloudoop Limited as Director of Technology. I
          specialize in creating interactive experiences and functional
          full-stack web apps. I don’t like to define myself by the work I’ve
          done. I define myself by the work I want to do. Skills can be taught,
          personality is inherent. I prefer to keep learning, continue
          challenging myself and do interesting things that matter.
        </p>
      </article>
      <div className='my-2'>
        <ul className='flex flex-col items-center'>
          <li className='mt-2'>
            Learn
            <NavLink
              to={'/'}
              className='font-bold rounded-md transition-all hover:border-b-2
              hover:shadow-slate-300  hover:shadow-sm hover:text-slate-600 hover:transition-all'
            >
              {' '}
              ./about{' '}
            </NavLink>
            me
          </li>
          <li className='mt-2'>
            See my
            <NavLink
              to={'/projects'}
              className='font-bold rounded-md transition-all hover:border-b-2
              hover:shadow-slate-300  hover:shadow-sm hover:text-slate-600 hover:transition-all'
            >
              {' '}
              ./projects{' '}
            </NavLink>
          </li>
          <li className='mt-2'>
            View my
            <NavLink
              to={'/resume'}
              className='font-bold rounded-md transition-all hover:border-b-2
              hover:shadow-slate-300  hover:shadow-sm hover:text-slate-600 hover:transition-all'
            >
              {' '}
              ./resume{' '}
            </NavLink>
            me
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Hero;
