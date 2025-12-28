import { Outlet } from "react-router";
import Navbar from "../Shared/Header/Navbar";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
