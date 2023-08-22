import Button from "./Button";
import style from "../../styles/Navbar.module.scss";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className={style.Container}>
      <div className={style.Wrapper}>
        <div>
          <img src={Logo} alt="instantly logo" />
        </div>
        <nav role="navigation" className={style.Navigation}>
          <a href="/leads">Leads</a>
          <a href="/email-warmup">Warmup</a>
          <a href="/pricing">Pricing</a>
          <a href="/about">About</a>
          <a href="/review">Reviews</a>
          <a href="/blog">Blog</a>
        </nav>
        <div className={style.NavbarEnd}>
          <a href="/login" className={style.Login}>
            Log in
          </a>
          <Button variant="gray" size="lg" type="button" onClick={""}>
            GET STARTED
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
