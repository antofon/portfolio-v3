import Image from 'next/image';
import aboutStyles from '../styles/About.module.css';
import aboutImg from '../public/assets/images/about/profile_headshot.jpg';

const About = () => {
  return (
    <section id="about" className={aboutStyles.container} aria-labelledby="about">
      <div className={aboutStyles.grid}>
        <div className={aboutStyles.textCol}>
          <h2 className={aboutStyles.sectionTitle}>ABOUT</h2>
          <h3 className={aboutStyles.sectionDescription}>Who I Am</h3>
          <div className={aboutStyles.imageAboveCopy}>
            <Image
              src={aboutImg}
              alt="about image"
              height={500}
              width={500}
              className={aboutStyles.img}
            />
          </div>
          <p className={aboutStyles.bodyText}>
            There’s no greater joy than bringing an idea to life. Coding has
            empowered me to create visually sound and functional websites,
            limited only by the current technology of the times. Outside of
            that, imagination is truly boundless.
          </p>
          <p className={aboutStyles.bodyText}>
            I’ve experienced immense pleasure partaking in open source projects,
            volunteer teaching of web developement fundamentals, and career
            opportunities as a Front-End Web Developer.
          </p>
          <a href="#experience" className={aboutStyles.projectsLink}>
            Check out my experience
          </a>
        </div>
        <div className={aboutStyles.imageCol}>
          <Image
            src={aboutImg}
            alt=""
            height={500}
            width={500}
            className={aboutStyles.img}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
