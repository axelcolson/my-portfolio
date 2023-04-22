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
                <span id='title-sub'>My</span> Path
            </h2>
            <ul>
                <li>
                    <div className="date">April 2022</div>
                    <div className="title">Be-Housing</div>
                    <div className="descr">In april 2022, I got hired by Be-Housing as a full stack developer.</div>
                </li>
                <li>
                    <div className="date">Januari 2022</div>
                    <div className="title">Masters degree in Computer Science</div>
                    <div className="descr">Left program after two years to pursue career goals.</div>
                </li>
                <li>
                    <div className="date">Januari 2020</div>
                    <div className="title">Professional Bachelor's degree in Computer Science</div>
                    <div className="descr">I graduated at Hogeschool PXL with a bachelor's degree in computer science.</div>
                </li>
                <li>
                    <div className="date">Juni 2017</div>
                    <div className="title">High school degree</div>
                    <div className="descr">I graduated at VIIO Humaniora in Latin: Modern Languages</div>
                </li>
            </ul>
        </div>
      </header>
      
    );
  };
  

export { Experience };