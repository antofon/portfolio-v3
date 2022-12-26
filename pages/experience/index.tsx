import { useRouter } from 'next/router';
import Header from '../../components/Header';
import About from '../../components/About';
import Skills from '../../components/Skills/Skills';
import Experience from '../../components/Experience/Experience';
import Contact from '../../components/Contact';

import Layout from '../../components/Layout';
const Post = () => {
  const router = useRouter();
  //same name as name of your file, can be [slug].js; [specialId].js - any name you want
  const { pid } = router.query;
  //result will be '55' (string)
  return (
    <Layout>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </Layout>
  );
};

export default Post;
