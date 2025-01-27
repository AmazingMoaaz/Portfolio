import Layout from './components/Layout';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Certifications from './components/sections/Certifications';
import Projects from './components/sections/Projects';
import CTF from './components/sections/CTF';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <CTF />
      <Contact />
    </Layout>
  );
}

export default App;