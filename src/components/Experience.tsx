import React from 'react';
import '../stylesheets/Experience.css';

interface ExperienceProps {
    name: string;
    title: string;
    email: string;
    phone: string;
    linkedIn: string;
  }


const Experience: React.FC<ExperienceProps> = (props) => {
  // eslint-disable-next-line
    const { name, title, email, phone, linkedIn } = props;
  
    return (
      <header className="experience">
        <div id='experience-container'>
            <h2 id='experience-title'>
                <span id='title-sub'>MY</span> EXPERIENCE
            </h2>
        </div>
      </header>
      
    );
  };
  

export { Experience };