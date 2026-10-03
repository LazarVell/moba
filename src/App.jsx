import Header from './components/Header';
import Hero from './components/Hero';
import Name from './components/Name';
import Problem from './components/Problem';
import Pillars from './components/Pillars';
import Plan from './components/Plan';
import Curriculum from './components/Curriculum';
import AiFirst from './components/AiFirst';
import Projects from './components/Projects';
import Live from './components/Live';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Name />
        <Problem />
        <Pillars />
        <Plan />
        <Curriculum />
        <AiFirst />
        <Projects />
        <Live />
      </main>
      <Footer />
    </>
  );
}
