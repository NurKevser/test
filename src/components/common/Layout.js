import Footer from "./Footer";
import Navbar from "./Navbar";
// import style from "../../styles/layout.module.scss";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
