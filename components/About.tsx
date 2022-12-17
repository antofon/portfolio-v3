import Image from 'next/image';
import aboutStyles from '../styles/About.module.css';
import aboutImg from '../public/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg';

const About = () => {
  return (
    <div id="about" className={aboutStyles.container}>
      <div className={aboutStyles.grid}>
        <div className={aboutStyles.textCol}>
        <h2 className={aboutStyles.sectionTitle}>ABOUT</h2>
        <p className={aboutStyles.sectionDescription}>Who I Am</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim
      eget libero in fringilla. Maecenas ultricies fringilla dui sed tincidunt.
      In tincidunt dui libero, sed imperdiet enim auctor sed. Morbi eu feugiat
      est, quis viverra purus. Ut vehicula tortor et quam hendrerit, in commodo</p>
      <p>neque commodo. Mauris placerat interdum velit, nec placerat libero rutrum
      ornare. Praesent vitae lobortis eros. Suspendisse sed mauris quis risus
      pretium eleifend. Duis dapibus nibh lectus, a fringilla purus condimentum
      sed. Cras nec odio leo. Integer sollicitudin arcu non dui elementum
      ultrices. Duis tincidunt erat ut augue tincidunt, sed dapibus purus
      euismod. Etiam at dapibus dui. Sed eu mauris et mi dapibus vestibulum.
      Morbi maximus quis lacus in consequat. Sed tortor augue, cursus non
      scelerisque nec, viverra ut arcu. Aenean eget imperdiet justo. Etiam a
      venenatis sem. Cras eget nisi sagittis, </p>
      <a href="#projects" className={aboutStyles.projectsLink}>Check out some of my latest projects</a>
        </div>
        <div className={aboutStyles.imageCol}>
          <Image src={aboutImg} alt="about image" height={500} width={500} className={aboutStyles.img} />
        </div>
      </div>
      
    </div>
  );
};

export default About;
