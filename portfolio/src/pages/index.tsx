import { NavBar } from '../components/NavBar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';
import { Certifications } from '../components/Certifications';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}