import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar.component";
import Footer from "../components/footer/footer.component";

const MainLayout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar />
      </div>
      <div className="container">
        <Outlet />
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
};
export default MainLayout;
