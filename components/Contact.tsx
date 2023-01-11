import React, { useState } from 'react';
import Router from 'next/router';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import useWindowDimensions from '../hooks/useWindowDimensions';
import contactImg from '../public/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg';
import { FaLinkedinIn, FaGithub, FaCodepen } from 'react-icons/fa';
import contactStyles from '../styles/Contact.module.css';

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    subject: '',
    message: '',
    reply_to: '',
  });

  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const { width } = useWindowDimensions();
  const handleInput = (e: any) => {
    // var regex =
    //   /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    // prevent input of numbers in name field
    // https://bobbyhadz.com/blog/react-input-only-letters
    // if (e.target.name === 'from_name') {
    //only characters
    //   setToSend({
    //     ...toSend,
    //     [e.target.name]: e.target.value.replace(/[^a-z]/gi, ''),
    //   });
    // }
    if (e.target.name === 'from_name') {
      setToSend({
        ...toSend,
        [e.target.name]: e.target.value.replace(/[^\w+( +\w+)*$]/gi, ''),
      });
    } else {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    } // don't restrict input
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .send('service_z0z1p2k', 'template_cw6wweg', toSend, '9L__hh59T6j2oocvo')
      .then(
        (response) => {
          console.log('SUCCESS!');
        },
        (err) => {
          //add set error here?
          //err.text
          console.log('FAILED...');
        }
      );
    // show message after successful submission
    setIsFormSubmit(!isFormSubmit);
    setSuccessMessage('Message sent!');
    // clear form after successful submission
    setToSend({
      from_name: '',
      subject: '',
      message: '',
      reply_to: '',
    });

    // wait 1 second before redirecting to top of page
    const timer = setTimeout(() => {
      // clear success message
      setSuccessMessage('');
      //upon clearing of form
      setIsFormSubmit(!isFormSubmit);
      //remove message block, only text gets cleared

      /**************CURRENTLY CAUSING NOT FOUND ERROR ************************/
      // document.getElementById('successMessage')?.remove();

      // const successMessageSelector = document.getElementById(
      //   'successMessageContainer'
      // );

      // if (successMessageSelector) {
      //   const successMessageDisplay = window.getComputedStyle(
      //     successMessageSelector
      //   ).display;

      //   if (successMessageDisplay === 'block') {
      //     successMessageSelector.style.display = 'none';
      //     console.log('hide message...');
      //   } else {
      //     successMessageSelector.style.display = 'block';
      //     console.log('show message...');
      //   }
      // }

      Router.reload();
      //   successMessageSelector &&
      //   successMessageSelector.style.display === 'block'
      // ) {
      //   successMessageSelector.style.display = 'none';
      //   console.log('hide message...');
      // } else if (
      //   successMessageSelector &&
      //   successMessageSelector.style.display === 'none'
      // ) {
      //   console.log('show message...');
      //   successMessageSelector.style.display = 'block';
      // }
      // if (successMessage && successMessage.style.display === 'none') {
      //   console.log('showing message');
      //   successMessage.style.display = 'block';
      // } else if (successMessage && successMessage.style.display === 'block') {
      //   console.log('hiding message');
      //   successMessage.style.display = 'none';
      // } else {
      //   console.log("successMessage value: ", successMessage)
      // }
      // className={contactStyles.successMessage}
      //only runs if at desktop size, should not be adding/removing any classes until we get to 2 col layout.
      if (typeof width !== 'undefined' && width >= 1008) {
        // add back original class, bringing back original margin top
        document
          .querySelector(`.${contactStyles.socialsContainerFormSubmit}`)
          ?.classList?.add(`${contactStyles.socialsContainer}`);
        // remove newly added class, removing new margin top
        document
          .querySelector(`#removeClass`)
          ?.classList?.remove(`${contactStyles.socialsContainerFormSubmit}`);
      }
    }, 1000);

    document
      .querySelector(`.${contactStyles.socialsContainerFormSubmit}`)
      ?.classList?.add(`${contactStyles.socialsContainer}`);
    return () => clearTimeout(timer);
  };

  return (
    <section id="contact" className={contactStyles.container} aria-labelledby="contact">
      <h2 className={contactStyles.sectionTitle}>CONTACT</h2>
      <h3 className={contactStyles.sectionDescription}>Get In Touch</h3>
      <div className={contactStyles.wrapper}>
        {/* <div className={contactStyles.connectContainer}>
          <Image
            src={contactImg}
            alt="contact image"
            width={400}
            height={400}
            className={contactStyles.img}
          ></Image>
          <div className={contactStyles.bodyText}>
            <p className={contactStyles.name}>Front-End Web Developer</p>
            <p className={contactStyles.description}>
              I am available for freelance or full-time positions. Contact me
              and {"let's"} chat
            </p>
          </div>

          <div
            className={
              isFormSubmit && typeof width !== 'undefined' && width >= 1008
                ? contactStyles.socialsContainerFormSubmit
                : contactStyles.socialsContainer
            }
            id="removeClass"
          >
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
        </div> */}

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
              maxLength={30}
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
              maxLength={30}
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
              maxLength={50}
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
              maxLength={1000}
              value={toSend.message}
              className={contactStyles.formMessage}
              onChange={handleInput}
            ></textarea>
            <button type="submit" className={contactStyles.button}>
              Send Message
            </button>
            <div id="successMessageContainer">
              {isFormSubmit ? (
                <p id="successMessage" className={contactStyles.successMessage}>
                  {successMessage}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
