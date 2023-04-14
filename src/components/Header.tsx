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
  const { name, title, email, phone, linkedIn } = props;

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-name">{name}</h1>
        <h2 className="header-title">{title}</h2>
        <div className="header-contact">
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <a href={linkedIn} target="_blank" rel="noreferrer">
            My LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
};

export { Header };
