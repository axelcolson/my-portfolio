import React from 'react';
import '../stylesheets/Header.css';

interface HeaderProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedIn: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  // eslint-disable-next-line
  const { name, title, email, phone, linkedIn } = props;

  return (
    <header className="header">
      <div id='header-container'>
        <a href="https://www.linkedin.com/in/axel-colson-a78814154/" id='home-btn'>axelcolson</a>
        <div id='left-side-header'>
          <div id='left-side-container'>
              <h1 id='job-title'>Full Stack Developer</h1>
              <p id='job-sub-p'>Blending the art of front-end design with the technical precision of back-end development.</p>
              <div id='button-container'>
                <a href='https://www.linkedin.com/in/axel-colson-a78814154/' target='_blank' className='header-button' id='learn-more-btn-header' rel="noreferrer">Learn more</a>
                <a href='mailto:axel_colson@hotmail.com' className='header-button' id='contact-me-btn-header'>Contact me</a>
              </div>
          </div>
        </div>
        <div id='right-side-header'>
          <div id='profile-img-container'></div>
          <div id='floating-square'></div>
        </div>
      </div>
    </header>
    
  );
};

export { Header };
