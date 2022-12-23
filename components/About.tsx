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
          <p className={aboutStyles.bodyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim
      eget libero in fringilla. Maecenas ultricies fringilla dui sed tincidunt.
      In tincidunt dui libero, sed imperdiet enim auctor sed. Morbi eu feugiat
      est, quis viverra purus. Ut vehicula tortor et quam hendrerit, in commodo</p>
      <p className={aboutStyles.bodyText}>neque commodo. Mauris placerat interdum velit, nec placerat libero rutrum
      ornare. Praesent vitae lobortis eros. Suspendisse sed mauris quis risus
      pretium eleifend. </p>
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
