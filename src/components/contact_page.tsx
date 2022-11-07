import React from 'react';

const ContactPage:React.FC = () => {
  const openContactMail = () => {
    const email = 'francescvilasubias@gmail.com';
    const subject = 'Contact fvila.dev';
    window.open(`mailto:${email}?subject=${subject}`);
  };

  const handleFormSubmit = () => {

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
            <button onClick={openContactMail} type="button">send and email</button>
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
              <div id="form-name" className="form-field">
                <span>NAME</span>
                <input type="text" placeholder="What is your name?" />
              </div>
              <div id="form-email" className="form-field">
                <span>EMAIL ADDRESS</span>
                <input type="text" placeholder="email@example.com" />
              </div>
              <div id="form-message" className="form-field">
                <span>MESSAGE</span>
                <textarea placeholder="Write your message..." />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
