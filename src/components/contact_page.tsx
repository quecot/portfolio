import React, { FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage:React.FC = () => {
  const openContactMail = () => {
    const email = 'francescvilasubias@gmail.com';
    const subject = 'Contact fvila.dev';
    window.open(`mailto:${email}?subject=${subject}`);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nameField = (document.querySelector('#form-name') as HTMLInputElement);
    const emailField = (document.querySelector('#form-email') as HTMLInputElement);
    const messageField = (document.querySelector('#form-message') as HTMLTextAreaElement);
    const submitButton = (document.querySelector('#form-submit') as HTMLButtonElement);

    const name = nameField.value;
    const email = emailField.value;
    const message = messageField.value;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    submitButton.disabled = true;

    const emailParams = {
      name,
      message,
      email,
    };

    const responseParams = {
      user_name: name,
      user_email: email,
    };

    emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, emailParams, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then(() => {
        emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_RESPONSE_TEMPLATE_ID, responseParams, import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
        window.location.reload();
      });
  };

  return (
    <div className="contact-page" data-status="contact-inactive">
      <div className="contact-layout">
        <div id="contact-social-section">
          <span>Contact</span>
          <h1>
            Get in
            <br />
            touch
          </h1>

          <h2>
            You can
            {' '}
            <button onClick={openContactMail} type="button">send an email</button>
            {' '}
            or fill the form →
          </h2>
          <div id="contact-info">
            <a aria-label="Twitter link" target="_blank" href="https://twitter.com" rel="noreferrer">
              <i className="fa-brands fa-twitter" />
            </a>
            <a aria-label="LinkedIn link" target="_blank" href="https://www.linkedin.com/" rel="noreferrer">
              <i className="fa-brands fa-linkedin" />
            </a>
            <a aria-label="Github link" target="_blank" href="https://github.com/" rel="noreferrer">
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>
        <div id="contact-form-section">
          {/* <button type="button" aria-label="Close contact page" onClick={closeContact}><i className="fa-solid fa-x" /></button> */}
          <div>
            <div id="form-greeting">
              <h2>
                You are just one quick form away!
              </h2>
            </div>
            <form id="form" onSubmit={handleFormSubmit}>
              <div className="form-field">
                <span>NAME</span>
                <input id="form-name" type="text" required placeholder="What is your name?" />
              </div>
              <div className="form-field">
                <span>EMAIL ADDRESS</span>
                <input id="form-email" type="text" required placeholder="email@example.com" />
              </div>
              <div className="form-field">
                <span>MESSAGE</span>
                <textarea id="form-message" required placeholder="Write your message..." />
              </div>
              <button id="form-submit" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
