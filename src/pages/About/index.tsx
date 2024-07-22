import "./index.scss";
import photo from "@assets/photo.png";
import description from "@assets/description";

function About() {
  return (
    <div className="about__wrapper wrapper">
      <h2>About Me</h2>
      <div className="about">
        {/* <img className="about__photo" src={photo} alt="My photo" /> */}
        <p className="about__desc">{description}</p>
      </div>
    </div>
  );
}

export default About;
