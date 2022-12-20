import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import Router, { useRouter } from 'next/router';
import contactStyles from '../styles/Contact.module.css';
import contactImg from '../public/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg';
import { FaLinkedinIn, FaGithub, FaCodepen } from 'react-icons/fa';

const Contact = () => {
  const [subject, setSubject] = useState('');
  const router = useRouter();
  const [toSend, setToSend] = useState({
    from_name: '',
    subject: '',
    message: '',
    reply_to: '',
  });

  const handleInput = (e: any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .send('service_z0z1p2k', 'template_cw6wweg', toSend, '9L__hh59T6j2oocvo')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.log('FAILED...', err);
        }
      );
    router.push('/');
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
              I am available for freelance or full-time positions. Contact me
              and {"let's"} talk
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
          <form className={contactStyles.form} onSubmit={handleSubmit}>
            <label htmlFor="name" className={contactStyles.formLabel}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
              required
              value={toSend.from_name}
              className={contactStyles.formInput}
              onChange={handleInput}
            />
            <label
              htmlFor="email"
              className={`${contactStyles.formLabel} ${contactStyles.labelMarginTop}`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="reply_to"
              required
              value={toSend.reply_to}
              className={contactStyles.formInput}
              onChange={handleInput}
            />
            <label
              htmlFor="subject"
              className={`${contactStyles.formLabel} ${contactStyles.labelMarginTop}`}
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={toSend.subject}
              className={contactStyles.formInput}
              onChange={handleInput}
            />
            <label
              htmlFor="message"
              className={`${contactStyles.formLabel} ${contactStyles.labelMarginTop}`}
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              value={toSend.message}
              className={contactStyles.formMessage}
              onChange={handleInput}
            ></textarea>
            <button type="submit" className={contactStyles.button}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
