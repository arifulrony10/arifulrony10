import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main style={{ minHeight: '80vh' }}>
      <div className="row my-3 d-md-flex flex-md-row flex-column-reverse my-md-5">
        <div className="col-md-6 d-flex flex-column justify-content-center align-item-center fs-5 heroLink">
          <h4 className="fs-3">Hi, I'm</h4>
          <h1 className="fs-1 fw-bold">Md Ariful Islam</h1>
          <p className="text-justify">
            A software engineer based in Dhaka, I recently transitioned from my
            role as a Senior Data Management Assistant at{' '}
            <a
              href="https://icddrb.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted text-decoration-none bodyFont"
            >
              icddr,b
            </a>{' '}
            to pursue further growth and expertise. Currently enrolled in the{' '}
            <a
              href="https://projectcode.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted text-decoration-none "
            >
              Project Code{' '}
              <span style={{ fontSize: '16px' }}>by code works</span>
            </a>{' '}
            boot camp, I am dedicated to honing my skills in creating
            interactive experiences and developing functional full-stack web
            applications. I believe in defining myself not just by past
            accomplishments but by the ongoing journey of learning and
            challenging myself. My decision to attend Codeworks reflects my
            commitment to continuous improvement and engaging in meaningful
            projects that align with my passion for technology and innovation.
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src="https://i.ibb.co/Lp3RcCc/Md-Ariful-Islam-B-W-Squire.png"
            alt=""
            className="img-fluid rounded-pill bodyFont"
            style={{ maxHeight: '400px' }}
          />
        </div>
      </div>
      <div className="row my-md-5">
        <div className="col-md-12 d-flex justify-content-center align-items-center mx-auto text-center fs-3 mt-auto heroLink">
          <ul style={{ listStyle: 'none' }}>
            <li>
              Learn{' '}
              <Link
                to={'/about'}
                className="text-muted text-decoration-none fw-bold"
              >
                ./about
              </Link>{' '}
              me.
            </li>
            <li className="my-2">
              See my{' '}
              <Link
                to={'/about'}
                className="text-muted text-decoration-none fw-bold"
              >
                ./projects
              </Link>
              .
            </li>
            <li>
              Download my{' '}
              <Link
                to={'https://ariful.tiiny.site/'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted text-decoration-none fw-bold"
              >
                ./resume
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
