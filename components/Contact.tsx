import Image from 'next/image';
import contactStyles from '../styles/Contact.module.css';
import contactImg from '../public/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg';
import { FaLinkedinIn, FaGithub, FaCodepen } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = () => {
    console.log('submit clicked');
  };

  return (
    <div id="contact" className={contactStyles.container}>
      <h2 className={contactStyles.sectionTitle}>CONTACT</h2>
      <p className={contactStyles.sectionDescription}>Get In Touch</p>

      <div className={contactStyles.wrapper}>
        <div className={contactStyles.connectContainer}>
          <Image
            src={contactImg}
            alt="contact image"
            width={400}
            height={400}
            className={contactStyles.img}
          ></Image>

          <p className={contactStyles.name}>Anwana Ntofon</p>
          <div className={contactStyles.bodyText}>
          <p className={contactStyles.title}>Front-End Web Developer</p>
          <p className={contactStyles.description}>
            I am available for freelance or full-time positions. Contact me and{' '}
            {"let's"} talk
          </p>
          </div>

          <div className={contactStyles.socialsContainer}>
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
        </div>

        <div className={contactStyles.formContainer}>
          <form className={contactStyles.form}>
            <label htmlFor="name" className={contactStyles.formLabel}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={contactStyles.formInput}
            />
            <label htmlFor="email" className={`${contactStyles.formLabel} ${contactStyles.labelMarginTop}`}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={contactStyles.formInput}
            />
            <label htmlFor="subject" className={`${contactStyles.formLabel} ${contactStyles.labelMarginTop}`}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className={contactStyles.formInput}
            />
            <label htmlFor="message" className={`${contactStyles.formLabel} ${contactStyles.labelMarginTop}`}>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              className={contactStyles.formMessage}
            ></textarea>
            <button
              type="submit"
              onClick={handleSubmit}
              className={contactStyles.button}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
