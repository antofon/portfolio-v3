import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Layout>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </div>
  );
}
