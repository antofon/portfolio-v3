import Layout from '../components/Layout';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills/Skills';
import Experience from '../components/Experience/Experience';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Layout>
        <Header />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </Layout>
    </div>
  );
}
