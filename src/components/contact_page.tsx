import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage: React.FC = () => {
  const nameField = useRef<HTMLInputElement>(null);
  const emailField = useRef<HTMLInputElement>(null);
  const messageField = useRef<HTMLTextAreaElement>(null);
  const submitButton = useRef<HTMLButtonElement>(null);

  const openContactMail = () => {
    const email = 'francescvilasubias@gmail.com';
    const subject = 'Contact fvila.dev';
    window.open(`mailto:${email}?subject=${subject}`);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nameField.current || !emailField.current || !messageField.current || !submitButton.current) {
      return;
    }

    const name = nameField.current.value.trim();
    const email = emailField.current.value.trim();
    const message = messageField.current.value.trim();

    nameField.current.disabled = true;
    emailField.current.disabled = true;
    messageField.current.disabled = true;
    submitButton.current.disabled = true;

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
        emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_RESPONSE_TEMPLATE_ID, responseParams, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
          .then(() => {
            window.location.reload();
          });
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
                <input ref={nameField} id="form-name" type="text" required placeholder="What is your name?" />
              </div>
              <div className="form-field">
                <span>EMAIL</span>
                <input ref={emailField} id="form-email" type="email" required placeholder="What is your email?" />
              </div>
              <div className="form-field">
                <span>MESSAGE</span>
                <textarea ref={messageField} id="form-message" required placeholder="What do you want to say?" />
              </div>
              <button ref={submitButton} id="form-submit" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
