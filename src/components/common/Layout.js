import Footer from "./Footer";
import Navbar from "./Navbar";
import style from "../../styles/layout.module.scss";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <div className={style.Container}>{props.children}</div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
