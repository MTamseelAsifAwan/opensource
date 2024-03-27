import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./header.css";
import ai from "../src/ai.png";

const Header = () => {
   

    return (
      <div className="gpt3__header section_padding" id='home'>
        <div className="gpt3__header-content">
          <h1 className="gradient__text">Let&apos;s Explore Something amazing with Object Detection Model</h1>
          <p>The first version of Object Detection Model.</p>
             <p>Now we are going to update this version</p>
          <div className="gpt3__header-content__input">
            <button type="button" >Get Started</button>
          </div>

          <div className="gpt3__header-content__people">
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>

        <div className="gpt3__header-image">
          <img src={ai} alt="AI" />
        </div>
      </div>
    );
};

export default Header;
