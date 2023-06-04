import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main style={{ minHeight: "80vh" }}>
      <div className="row my-3">
        <div className="col-md-6 d-flex flex-column justify-content-center align-item-center">
          <h4>Hi, I'm</h4>
          <h1>Md. Ariful Islam</h1>
          <p className="text-justify">
            A software engineer based in Dhaka. Currently working as Senior Data
            Management Assistant at{" "}
            <a
              href="https://icddrb.org"
              target="_blank"
              className="text-black link-underline-primary"
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
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src="https://i.ibb.co/Dz13Z4B/ariful.jpg"
            alt=""
            className="img-fluid rounded-pill"
            style={{ maxHeight: "400px" }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mx-auto text-center">
          <ul style={{ listStyle: "none" }}>
            <li>
              Learn{" "}
              <Link to={"/about"} className="text-dark link-underline-primary">
                about
              </Link>{" "}
              me.
            </li>
            <li className="my-2">
              See my{" "}
              <Link to={"/about"} className="text-dark link-underline-primary">
                projects
              </Link>
              .
            </li>
            <li>
              Download my{" "}
              <Link to={"/about"} className="text-dark link-underline-primary">
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
