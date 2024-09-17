import React from 'react';
import '../style.css';
import Logo2 from "../../static/Logo2.png";

const ClickableLogo = () => {
  return (
    <div>
      <a href="https://youtu.be/dQw4w9WgXcQ?t=43" className="myLogo" target="_blank" rel="noopener noreferrer">
      <img src={Logo2} alt="../static/Logo.png" className="logoImage" />
      </a>
    </div>
  );
};

export default ClickableLogo;