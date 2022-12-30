import React, { useState } from 'react';

import ContactPage from './components/contact_page';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAboutPageActive, setAboutPageActive] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isContactPageActive, setContactPageActive] = useState(false);
  const slides = document.getElementsByTagName('article');

  const handleLeftClick = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;

    const currentSlide = (document.querySelector(`[data-index='${activeIndex}']`) as HTMLElement);
    const nextSlide = (document.querySelector(`[data-index='${nextIndex}']`) as HTMLElement);

    currentSlide!.dataset.status = 'after';

    nextSlide!.dataset.status = 'becoming-active-from-before';

    setTimeout(() => {
      nextSlide.dataset.status = 'active';
      setActiveIndex(nextIndex);
    });
  };

  const handleRightClick = () => {
    const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;

    const currentSlide = (document.querySelector(`[data-index='${activeIndex}']`) as HTMLElement);
    const nextSlide = (document.querySelector(`[data-index='${nextIndex}']`) as HTMLElement);

    currentSlide.dataset.status = 'before';

    nextSlide.dataset.status = 'becoming-active-from-after';

    setTimeout(() => {
      nextSlide.dataset.status = 'active';
      setActiveIndex(nextIndex);
    });
  };

  const handleAboutButton = () => {
    if (!isAboutPageActive) {
      const aboutPage = (document.querySelector('.about-page') as HTMLElement);
      const contactPage = (document.querySelector('.contact-page') as HTMLElement);
      aboutPage.dataset.status = 'about-active';
      setAboutPageActive(true);
      document.title = 'About | Francesc Vila Subias';
      if (isContactPageActive) {
        aboutPage.style.zIndex = '10';
        contactPage.style.zIndex = '0';
      }
      setTimeout(() => {
        contactPage.dataset.status = 'contact-inactive';
      }, 600);
    } else {
      const contactPage = (document.querySelector('.contact-page') as HTMLElement);
      contactPage.dataset.status = 'contact-inactive';
    }
  };

  const handleWorkButton = () => {
    if (isAboutPageActive || isContactPageActive) {
      const aboutPage = (document.querySelector('.about-page') as HTMLElement);
      aboutPage.dataset.status = 'about-inactive';
      setAboutPageActive(false);
      document.title = 'Work | Francesc Vila Subias';
      const contactPage = (document.querySelector('.contact-page') as HTMLElement);
      contactPage.dataset.status = 'contact-inactive';
    }
  };

  const handleContact = () => {
    const contactPage = (document.querySelector('.contact-page') as HTMLElement);
    const aboutPage = (document.querySelector('.about-page') as HTMLElement);
    contactPage.dataset.status = 'contact-active';
    setContactPageActive(true);
    document.title = 'Contact | Francesc Vila Subias';
    aboutPage.style.zIndex = '0';
    contactPage.style.zIndex = '10';
  };

  return (
    <div className="App">
      <nav>
        <div id="nav-logo-section" className="nav-section">
          <a href="/">
            <span>FVS</span>
          </a>
        </div>
        <div id="nav-link-section" className="nav-section">
          <button type="button" onClick={handleAboutButton}>ABOUT</button>
          <button type="button" onClick={handleWorkButton}>WORK</button>
        </div>
        <div id="nav-social-section" className="nav-section">
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
        <div id="nav-contact-section" className="nav-section">
          <button type="button" onClick={handleContact}>CONTACT ME!</button>
        </div>
      </nav>
      <main>
        <article data-index="0" data-status="active">
          <div className="article-image-section article-section" />
          <div className="article-description-section article-section">
            <p>Aquesta és la primera imatge de prova.</p>
          </div>
          <div className="article-title-section article-section">
            <a aria-label="Link to project" href="/" className="project-link">
              <h2>Primer post de prova</h2>
            </a>
            <a aria-label="Link to project" href="/">
              {/* eslint-disable-next-line max-len */}
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 37.5q-.5 0-.825-.325-.325-.325-.325-.825v-11.2h-11.2q-.5 0-.825-.325Q10.5 24.5 10.5 24q0-.5.325-.825.325-.325.825-.325h11.2v-11.2q0-.5.325-.825.325-.325.825-.325.5 0 .825.325.325.325.325.825v11.2h11.2q.5 0 .825.325.325.325.325.825 0 .5-.325.825-.325.325-.825.325h-11.2v11.2q0 .5-.325.825-.325.325-.825.325Z" /></svg>
            </a>
          </div>
          <div className="article-nav-section article-section">
            <button type="button" aria-label="Previous article" onClick={handleLeftClick}>
              {/* eslint-disable-next-line max-len */}
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M27.2 34.5 17.7 25q-.25-.25-.35-.5-.1-.25-.1-.55 0-.3.1-.525.1-.225.35-.475l9.55-9.55q.35-.35.825-.35t.825.35q.3.35.3.85t-.35.85l-8.9 8.85 8.95 8.95q.3.35.3.775 0 .425-.3.825-.35.35-.85.35t-.85-.35Z" /></svg>
            </button>
            <button type="button" aria-label="Next article" onClick={handleRightClick}>
              {/* eslint-disable-next-line max-len */}
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M17.95 34.5q-.3-.4-.325-.85-.025-.45.325-.8l8.9-8.9-8.9-8.9q-.35-.3-.325-.8.025-.5.325-.85.4-.35.825-.35.425 0 .775.35l9.55 9.55q.25.25.35.475.1.225.1.525 0 .3-.1.55-.1.25-.35.5l-9.5 9.5q-.35.35-.8.325-.45-.025-.85-.325Z" /></svg>
            </button>
          </div>
        </article>
        <article data-index="1" data-status="inactive">
          <div className="article-image-section article-section" />
          <div className="article-description-section article-section">
            <p>Aquesta és la segona imatge de prova.</p>
          </div>
          <div className="article-title-section article-section">
            <a aria-label="Link to project" href="/" className="project-link">
              <h2>Segon post de prova</h2>
            </a>
            <a aria-label="Link to project" href="/">
              {/* eslint-disable-next-line max-len */}
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 37.5q-.5 0-.825-.325-.325-.325-.325-.825v-11.2h-11.2q-.5 0-.825-.325Q10.5 24.5 10.5 24q0-.5.325-.825.325-.325.825-.325h11.2v-11.2q0-.5.325-.825.325-.325.825-.325.5 0 .825.325.325.325.325.825v11.2h11.2q.5 0 .825.325.325.325.325.825 0 .5-.325.825-.325.325-.825.325h-11.2v11.2q0 .5-.325.825-.325.325-.825.325Z" /></svg>
            </a>
          </div>
          <div className="article-nav-section article-section">
            <button type="button" aria-label="Previous article" onClick={handleLeftClick}>
              {/* eslint-disable-next-line max-len */}
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M27.2 34.5 17.7 25q-.25-.25-.35-.5-.1-.25-.1-.55 0-.3.1-.525.1-.225.35-.475l9.55-9.55q.35-.35.825-.35t.825.35q.3.35.3.85t-.35.85l-8.9 8.85 8.95 8.95q.3.35.3.775 0 .425-.3.825-.35.35-.85.35t-.85-.35Z" /></svg>
            </button>
            <button type="button" aria-label="Next article" onClick={handleRightClick}>
              {/* eslint-disable-next-line max-len */}
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M17.95 34.5q-.3-.4-.325-.85-.025-.45.325-.8l8.9-8.9-8.9-8.9q-.35-.3-.325-.8.025-.5.325-.85.4-.35.825-.35.425 0 .775.35l9.55 9.55q.25.25.35.475.1.225.1.525 0 .3-.1.55-.1.25-.35.5l-9.5 9.5q-.35.35-.8.325-.45-.025-.85-.325Z" /></svg>
            </button>
          </div>
        </article>
        <article data-index="2" data-status="inactive">
          <div className="article-image-section article-section" />
          <div className="article-description-section article-section">
            <p>Aquesta és la tercera imatge de prova.</p>
          </div>
          <div className="article-title-section article-section">
            <a aria-label="Link to project" href="/" className="project-link">
              <h2>Tercer post de prova</h2>
            </a>
            <a aria-label="Link to project" href="/">
              {/* eslint-disable-next-line max-len */}
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 37.5q-.5 0-.825-.325-.325-.325-.325-.825v-11.2h-11.2q-.5 0-.825-.325Q10.5 24.5 10.5 24q0-.5.325-.825.325-.325.825-.325h11.2v-11.2q0-.5.325-.825.325-.325.825-.325.5 0 .825.325.325.325.325.825v11.2h11.2q.5 0 .825.325.325.325.325.825 0 .5-.325.825-.325.325-.825.325h-11.2v11.2q0 .5-.325.825-.325.325-.825.325Z" /></svg>
            </a>
          </div>
          <div className="article-nav-section article-section">
            <button type="button" aria-label="Previous article" onClick={handleLeftClick}>
              {/* eslint-disable-next-line max-len */}
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M27.2 34.5 17.7 25q-.25-.25-.35-.5-.1-.25-.1-.55 0-.3.1-.525.1-.225.35-.475l9.55-9.55q.35-.35.825-.35t.825.35q.3.35.3.85t-.35.85l-8.9 8.85 8.95 8.95q.3.35.3.775 0 .425-.3.825-.35.35-.85.35t-.85-.35Z" /></svg>
            </button>
            <button type="button" aria-label="Next article" onClick={handleRightClick}>
              {/* eslint-disable-next-line max-len */}
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M17.95 34.5q-.3-.4-.325-.85-.025-.45.325-.8l8.9-8.9-8.9-8.9q-.35-.3-.325-.8.025-.5.325-.85.4-.35.825-.35.425 0 .775.35l9.55 9.55q.25.25.35.475.1.225.1.525 0 .3-.1.55-.1.25-.35.5l-9.5 9.5q-.35.35-.8.325-.45-.025-.85-.325Z" /></svg>
            </button>
          </div>
        </article>
        <article data-index="3" data-status="inactive">
          <div className="article-image-section article-section" />
          <div className="article-description-section article-section">
            <p>Aquesta és la quarta imatge de prova.</p>
          </div>
          <div className="article-title-section article-section">
            <a aria-label="Link to project" href="/" className="project-link">
              <h2>Quart post de prova</h2>
            </a>
            <a aria-label="Link to project" href="/">
              {/* eslint-disable-next-line max-len */}
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 37.5q-.5 0-.825-.325-.325-.325-.325-.825v-11.2h-11.2q-.5 0-.825-.325Q10.5 24.5 10.5 24q0-.5.325-.825.325-.325.825-.325h11.2v-11.2q0-.5.325-.825.325-.325.825-.325.5 0 .825.325.325.325.325.825v11.2h11.2q.5 0 .825.325.325.325.325.825 0 .5-.325.825-.325.325-.825.325h-11.2v11.2q0 .5-.325.825-.325.325-.825.325Z" /></svg>
            </a>
          </div>
          <div className="article-nav-section article-section">
            <button type="button" aria-label="Previous article" onClick={handleLeftClick}>
              {/* eslint-disable-next-line max-len */}
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M27.2 34.5 17.7 25q-.25-.25-.35-.5-.1-.25-.1-.55 0-.3.1-.525.1-.225.35-.475l9.55-9.55q.35-.35.825-.35t.825.35q.3.35.3.85t-.35.85l-8.9 8.85 8.95 8.95q.3.35.3.775 0 .425-.3.825-.35.35-.85.35t-.85-.35Z" /></svg>
            </button>
            <button type="button" aria-label="Next article" onClick={handleRightClick}>
              {/* eslint-disable-next-line max-len */}
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M17.95 34.5q-.3-.4-.325-.85-.025-.45.325-.8l8.9-8.9-8.9-8.9q-.35-.3-.325-.8.025-.5.325-.85.4-.35.825-.35.425 0 .775.35l9.55 9.55q.25.25.35.475.1.225.1.525 0 .3-.1.55-.1.25-.35.5l-9.5 9.5q-.35.35-.8.325-.45-.025-.85-.325Z" /></svg>
            </button>
          </div>
        </article>
      </main>
      <div className="about-page" data-status="about-inactive">
        <p>About page</p>
      </div>
      <ContactPage />
    </div>
  );
};

export default App;
