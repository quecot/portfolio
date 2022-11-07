import React from 'react';

interface Props {
  setContactPageActive: React.Dispatch<React.SetStateAction<boolean>>
  isAboutPageActive: boolean
}

const ContactPage:React.FC<Props> = ({ setContactPageActive, isAboutPageActive }) => {
  const closeContact = () => {
    const contactPage = (document.querySelector('.contact-page') as HTMLElement);
    contactPage.dataset.status = 'contact-inactive';
    setContactPageActive(false);
    document.title = isAboutPageActive ? 'About | Francesc Vila Subias' : 'Work | Francesc Vila Subias';
  };

  return (
    <div className="contact-page" data-status="contact-inactive">
      <p>Contact page</p>
      <button type="button" onClick={closeContact}>Close</button>
    </div>
  );
};

export default ContactPage;
