import Navbar from "./Navbar";
// import style from "../../styles/layout.module.scss";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;
