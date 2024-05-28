import "./index.scss";
import ReactLogo from "@assets/logos/react.svg";
import PWALogo from "@assets/logos/pwa.svg";
import PythonLogo from "@assets/logos/python.svg";
import LinuxLogo from "@assets/logos/tux.svg";
import DockerLogo from "@assets/logos/docker.svg";
import TSLogo from "@assets/logos/typescript.svg";

const Skills = () => {
  return (
    <div className="skills__wrapper wrapper">
      <h2>My skillset</h2>
      <div className="skills">
        <img className="skills__logo skills__logo--react skills__logo--spin" src={ReactLogo} alt="React" />
        <img className="skills__logo skills__logo--pwa" src={PWALogo} alt="Progressive Web Apps" />
        <img className="skills__logo skills__logo--ts" src={TSLogo} alt="Typescript" />
        <img className="skills__logo skills__logo--python" src={PythonLogo} alt="Python" />
        <img className="skills__logo skills__logo--linux" src={LinuxLogo} alt="Linux" />
        <img className="skills__logo skills__logo--docker" src={DockerLogo} alt="Docker" />
      </div>
    </div>
  );
};

export default Skills;
