import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-transparent"
      style={{ maxHeight: "20vh" }}
    >
      <div className="container">
        <Link to={"/"} className="text-center rm-title navbar-brand">
          Md. Ariful Islam
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                activeclassname="active"
                to={"/"}
                className="nav-link"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeclassname="active"
                to={"/about"}
                className="nav-link"
              >
                Resume
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeclassname="active"
                to={"/projects"}
                className="nav-link"
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeclassname="active"
                to={"/contact"}
                className="nav-link"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
