import "./index.scss";
import Feature from "@components/Feature";
import CustomButton from "@components/CustomButton";
import { IoChatbubblesOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <nav className="navbar wrapper">
      <a className="navbar__link" href="">
        Skills
      </a>
      <a className="navbar__link" href="">
        Projects
      </a>
      <a className="navbar__link" href="">
        About
      </a>
      <a className="navbar__link" href="">
        Contacts
      </a>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="header__intro-wrapper wrapper">
        <div className="header__intro">
          <h1>Cartaplassa</h1>
          <p>Andrey&nbsp;Filippov, React&nbsp;developer</p>
          <CustomButton link='#contacts'><IoChatbubblesOutline /> DM me :3</CustomButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
