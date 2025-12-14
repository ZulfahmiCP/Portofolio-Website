import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import CP from './components/CP/CP';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      
      <main>
        <About />
        <Projects />
        <CP />
        <Skills />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;