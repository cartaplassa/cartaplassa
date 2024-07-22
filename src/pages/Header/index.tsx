import "./index.scss";
import Feature from "@components/Feature";
import CustomButton from "@components/CustomButton";
import { IoChatbubblesOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="navbar wrapper">
      <a className="navbar__link" href="#skills">
        Skills
      </a>
      <a className="navbar__link" href="#projects">
        Projects
      </a>
      <a className="navbar__link" href="#about">
        About
      </a>
      <a className="navbar__link" href="#contacts">
        Contacts
      </a>
    </nav>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="header__intro-wrapper wrapper">
        <div className="header__intro">
          <h1>Cartaplassa</h1>
          <p>Andrey&nbsp;Filippov, React&nbsp;developer</p>
          <CustomButton link="#contacts">
            <IoChatbubblesOutline /> Write me
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
