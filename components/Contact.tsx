import Image from 'next/image';
import contactStyles from '../styles/Contact.module.css';
import contactImg from '../public/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg';
import { FaLinkedinIn, FaGithub, FaCodepen } from 'react-icons/fa';

const Contact = () => {

  const handleSubmit = ()=> {
    console.log("submit clicked");
  }
  
  return (
    <div id="contact" className={contactStyles.container}>
      <h2 className={contactStyles.sectionTitle}>CONTACT</h2>
      <p className={contactStyles.sectionDescription}>Get In Touch</p>

      <div className={contactStyles.grid}>
        <div className={contactStyles.connectContainer}>
          <Image
            src={contactImg}
            alt="contact image"
            width={400}
            height={400}
            className={contactStyles.img}
          ></Image>

          <p>Anwana Ntofon</p>
          <p>Front-End Web Developer</p>
          <p>
            I am available for freelance or full-time positions. Contact me and{' '}
            {"let's"} talk
          </p>
          <p className={contactStyles.connectText}>Connect with me</p>
          <div className={contactStyles.socials}>
            <div>
              <a
                href="https://www.linkedin.com/in/anwanantofon/"
                target="_blank"
                rel="noopener noreferrer"
                className={contactStyles.icon}
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/antofon"
                target="_blank"
                rel="noopener noreferrer"
                className={contactStyles.icon}
              >
                <FaGithub />
              </a>
            </div>
            <div>
              <a
                href="https://codepen.io/antofon"
                rel="noopener noreferrer"
                className={contactStyles.icon}
              >
                <FaCodepen />
              </a>
            </div>
          </div>
        </div>

        <div className={contactStyles.formContainer}>
          <form action="/send-data-here" method="post">
            <label htmlFor="roll">Roll Number</label>
            <input type="text" id="roll" name="roll" required />
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <button type="submit">Submit</button>
          </form>
          <button onClick={handleSubmit}/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
