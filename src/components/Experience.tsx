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
                    <div className="date">2002</div>
                    <div className="title">Title 1</div>
                    <div className="descr">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque hic quibusdam fugiat est numquam harum, accusamus suscipit consequatur laboriosam!</div>
                </li>
                <li>
                    <div className="date">2007</div>
                    <div className="title">Title 2</div>
                    <div className="descr">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum vero nihil veniam.</div>
                </li>
                <li>
                    <div className="date">2012</div>
                    <div className="title">Title 3</div>
                    <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima consequuntur soluta placeat iure totam commodi repellendus ea delectus, libero fugit quod reprehenderit, sequi quo, et dolorum saepe nulla hic.</div>
                </li>
                <li>
                    <div className="date">2017</div>
                    <div className="title">Title 4</div>
                    <div className="descr">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cumque.</div>
                </li>
                <li>
                    <div className="date">2022</div>
                    <div className="title">Title 5</div>
                    <div className="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.</div>
                </li>
            </ul>
        </div>
      </header>
      
    );
  };
  

export { Experience };