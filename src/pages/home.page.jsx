import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main style={{ minHeight: '80vh' }}>
      <div className='row my-3 d-md-flex flex-md-row flex-column-reverse my-md-5'>
        <div className='col-md-6 d-flex flex-column justify-content-center align-item-center fs-5 heroLink'>
          <h4 className='fs-3'>Hi, I'm</h4>
          <h1 className='fs-1 fw-bold'>Md. Ariful Islam</h1>
          <p className='text-justify'>
            A software engineer based in Dhaka. Currently working as{' '}
            <em>Senior Data Management Assistant</em> at{' '}
            <a
              href='https://icddrb.org'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted text-decoration-none '
            >
              icddr,b
            </a>
            . I specialize in creating interactive experiences and functional
            full-stack web apps. I don’t like to define myself by the work I’ve
            done. I define myself by the work I want to do. Skills can be
            taught, personality is inherent. I prefer to keep learning, continue
            challenging myself and do interesting things that matter.
          </p>
        </div>
        <div className='col-md-6 d-flex justify-content-center align-items-center'>
          <img
            src='https://i.ibb.co/Lp3RcCc/Md-Ariful-Islam-B-W-Squire.png'
            alt=''
            className='img-fluid rounded-pill'
            style={{ maxHeight: '400px' }}
          />
        </div>
      </div>
      <div className='row my-md-5'>
        <div className='col-md-12 d-flex justify-content-center align-items-center mx-auto text-center fs-3 heroLink'>
          <ul style={{ listStyle: 'none' }}>
            <li>
              Learn{' '}
              <Link
                to={'/about'}
                className='text-muted text-decoration-none fw-bold'
              >
                about
              </Link>{' '}
              me.
            </li>
            <li className='my-2'>
              See my{' '}
              <Link
                to={'/about'}
                className='text-muted text-decoration-none fw-bold'
              >
                projects
              </Link>
              .
            </li>
            <li>
              Download my{' '}
              <Link
                to={'https://ariful.tiiny.site/'}
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted text-decoration-none fw-bold'
              >
                resume
              </Link>
              .
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
export default HomePage;
