import TimelineComponent from '../components/timeline/timeline.component';
import { HiOutlineExternalLink } from 'react-icons/hi';

const AboutPage = () => {
  return (
    <div>
      <h1 className='text-center my-4'>About</h1>
      <TimelineComponent />
      <div className='text-center my-2'>
        <a
          href='http://'
          target='_blank'
          rel='noopener noreferrer'
          className='text-decoration-none btn btn-outline-primary'
        >
          Download My Resume <HiOutlineExternalLink />
        </a>
      </div>
    </div>
  );
};
export default AboutPage;
