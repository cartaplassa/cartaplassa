import './App.scss'
import Header from '@pages/Header';
import Skills from '@pages/Skills';
import Projects from '@pages/Projects';
import About from '@pages/About';
import Contacts from '@pages/Contacts';


function App() {
  return (
    <div className="App">
      <header id="header">
        <Header />
      </header>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contacts">
        <Contacts />
      </section>
    </div>
  );
}

export default App
